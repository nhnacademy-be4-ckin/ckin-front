package store.ckin.front.oauth;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * OAuth 서버에서 계정 정보를 가져오는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 13.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {
    private final RestTemplate restTemplate;

    private final Converter<OAuth2UserRequest, RequestEntity<?>> requestEntityConverter
            = new CustomOAuth2UserRequestConverter();

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        log.debug("OAuth start");

        String platform = userRequest.getClientRegistration().getClientName();

        if (platform.equals("payco")) {
            log.debug("Payco OAuth");
            RequestEntity<?> request = Objects.requireNonNull(requestEntityConverter.convert(userRequest));
            ResponseEntity<Map<String, Object>> response = restTemplate.exchange(
                    request,
                    new ParameterizedTypeReference<>() {
                    });

            Map<String, Object> userAttributes = (Map) response.getBody().get("data");

            Set<GrantedAuthority> authorities = new LinkedHashSet<>();
            authorities.add(new OAuth2UserAuthority(userAttributes));
            OAuth2AccessToken token = userRequest.getAccessToken();

            for (String authority : token.getScopes()) {
                authorities.add(new SimpleGrantedAuthority("SCOPE_" + authority));
            }

            return new DefaultOAuth2User(authorities, userAttributes, "member");
        }

        return super.loadUser(userRequest);
    }
}