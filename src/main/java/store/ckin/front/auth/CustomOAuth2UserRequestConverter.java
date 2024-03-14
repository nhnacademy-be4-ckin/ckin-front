package store.ckin.front.auth;

import java.net.URI;
import java.util.Collections;
import org.springframework.core.convert.converter.Converter;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * Spring Security 의 기본 Converter 설정에 벗어나는 OAuth 플랫폼 로직들을 처리하는 Converter 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 14.
 */
public class CustomOAuth2UserRequestConverter
        implements Converter<OAuth2UserRequest, RequestEntity<?>> {
    private static final MediaType DEFAULT_CONTENT_TYPE = MediaType.valueOf("application/x-www-form-urlencoded;charset=UTF-8");

    @Override
    public RequestEntity<?> convert(OAuth2UserRequest userRequest) {
        ClientRegistration clientRegistration = userRequest.getClientRegistration();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.setContentType(DEFAULT_CONTENT_TYPE);
        headers.set("client_id", clientRegistration.getClientId());
        headers.set("access_token", userRequest.getAccessToken().getTokenValue());

        URI uri = UriComponentsBuilder
                .fromUriString(clientRegistration
                        .getProviderDetails()
                        .getUserInfoEndpoint()
                        .getUri())
                .build()
                .toUri();

        return new RequestEntity<>(HttpMethod.POST, uri);
    }
}
