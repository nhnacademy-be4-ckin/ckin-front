package store.ckin.front.member.filter;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import store.ckin.front.exception.ServerErrorException;
import store.ckin.front.token.domain.TokenRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.service.TokenService;
import store.ckin.front.util.CookieUtil;

/**
 * 로그인 처리를 하는 Filter 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 21.
 */
@Slf4j
@RequiredArgsConstructor
public class CustomLoginFilter extends UsernamePasswordAuthenticationFilter {
    private final TokenService tokenService;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        log.debug("CustomLoginFilter : Try Login Authentication");

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(obtainUsername(request), obtainPassword(request));

        return getAuthenticationManager().authenticate(token);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult)
            throws IOException, ServletException {
        log.debug("CustomLoginFilter : Success Authentication");

        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) authResult;
        String id = authenticationToken.getName();

        try {
            TokenResponseDto tokenResponseDto = tokenService.getToken(new TokenRequestDto(id));
            addTokenCookie(response, tokenResponseDto);

            response.sendRedirect("/");
        } catch (ServerErrorException ex) {
            log.error("CustomLoginFilter.successfulAuthentication() : Internal Server Error");

            response.sendRedirect("/error");
        }
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request,
                                              HttpServletResponse response,
                                              AuthenticationException failed)
            throws IOException, ServletException {
        log.debug("Login Failed : {}", failed.getMessage());
        response.sendRedirect("/login");
    }

    private void addTokenCookie(HttpServletResponse response, TokenResponseDto tokenResponseDto) {
        String accessToken = tokenResponseDto.getAccessToken();
        String refreshToken = tokenResponseDto.getRefreshToken();

        CookieUtil.makeCookie(response, CookieUtil.HEADER_ACCESS_TOKEN, accessToken);
        CookieUtil.makeCookie(response, CookieUtil.HEADER_REFRESH_TOKEN, refreshToken);
    }
}