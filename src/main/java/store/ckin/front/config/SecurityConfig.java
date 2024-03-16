package store.ckin.front.config;

import org.apache.tomcat.util.http.LegacyCookieProcessor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import store.ckin.front.auth.CustomLogoutHandler;
import store.ckin.front.auth.CustomLogoutSuccessHandler;
import store.ckin.front.member.auth.CustomAuthenticationProvider;
import store.ckin.front.member.filter.CustomLoginFilter;
import store.ckin.front.member.filter.JwtFilter;
import store.ckin.front.member.service.MemberDetailsService;
import store.ckin.front.oauth.CustomOauth2UserService;
import store.ckin.front.oauth.HttpCookieOauth2AuthorizationRequestRepository;
import store.ckin.front.oauth.Oauth2SuccessHandler;
import store.ckin.front.token.service.TokenService;

/**
 * Security 설정을 관리하는 Configuration 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 21.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final RedisTemplate<String, Object> redisTemplate;

    private final MemberDetailsService memberDetailsService;

    private final TokenService tokenService;

    private final CustomOauth2UserService customOauth2UserService;

    private final Oauth2SuccessHandler oauth2SuccessHandler;


    /**
     * SecurityConfig 에 해당하는 Bean 들을 주입하는 생성자 메서드 입니다.
     *
     * @param redisTemplate        authRedisTemplate
     * @param memberDetailsService MemberDetailService
     * @param tokenService         TokenService
     */
    public SecurityConfig(@Qualifier("authRedisTemplate") RedisTemplate<String, Object> redisTemplate,
                          MemberDetailsService memberDetailsService,
                          TokenService tokenService,
                          CustomOauth2UserService customOauth2UserService,
                          Oauth2SuccessHandler oauth2SuccessHandler) {
        this.redisTemplate = redisTemplate;
        this.memberDetailsService = memberDetailsService;
        this.tokenService = tokenService;
        this.customOauth2UserService = customOauth2UserService;
        this.oauth2SuccessHandler = oauth2SuccessHandler;
    }


    /**
     * SecurityFilterChain 을 설정하는 메서드 입니다.
     *
     * @param http HttpSecurity
     * @return SecurityFilterChain
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .httpBasic().disable()
                .formLogin().disable()
                .logout()
                .logoutUrl("/logout")
                .addLogoutHandler(logoutHandler())
                .logoutSuccessHandler(logoutSuccessHandler())
                .and()
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/", "/home", "/login", "/signup").permitAll()
                        .requestMatchers("/admin/**").hasAuthority("ADMIN")
                        .requestMatchers("/member/**").hasAuthority("MEMBER")
                        .anyRequest().permitAll())
                .addFilterBefore(jwtFilter(), CustomLoginFilter.class)
                .addFilterBefore(customLoginFilter(), UsernamePasswordAuthenticationFilter.class)
                .oauth2Login(oauth -> oauth
                        .loginPage("/login")
                        .authorizationEndpoint()
                        .authorizationRequestRepository(httpCookieOauth2AuthorizationRequestRepository())
                        .and()
                        .userInfoEndpoint()
                        .userService(customOauth2UserService)
                        .and()
                        .successHandler(oauth2SuccessHandler));

        return http.build();
    }


    @Bean
    public JwtFilter jwtFilter() {
        return new JwtFilter(redisTemplate, tokenService);
    }

    /**
     * CustomLoginFilter 에 파라미터를 설정 후 Bean 으로 등록.
     *
     * @return CustomLoginFilter
     */
    @Bean
    public CustomLoginFilter customLoginFilter() throws Exception {
        CustomLoginFilter filter = new CustomLoginFilter(tokenService);
        filter.setAuthenticationManager(authenticationManager(null));
        filter.setUsernameParameter("email");
        filter.setPasswordParameter("password");

        return filter;
    }

    @Bean
    public BCryptPasswordEncoder bcryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public CustomAuthenticationProvider customAuthenticationProvider() {
        return new CustomAuthenticationProvider(memberDetailsService, bcryptPasswordEncoder());
    }

    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> cookieProcessorCustomizer() {
        return (serverFactory) -> serverFactory.addContextCustomizers(
                (context) -> context.setCookieProcessor(new LegacyCookieProcessor()));
    }

    @Bean
    public LogoutHandler logoutHandler() {
        return new CustomLogoutHandler(redisTemplate);
    }

    @Bean
    public LogoutSuccessHandler logoutSuccessHandler() {
        return new CustomLogoutSuccessHandler();
    }

    @Bean
    public HttpCookieOauth2AuthorizationRequestRepository httpCookieOauth2AuthorizationRequestRepository() {
        return new HttpCookieOauth2AuthorizationRequestRepository();
    }
}
