package store.ckin.front.token.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.member.domain.LoginRequestDto;
import store.ckin.front.token.adapter.TokenAdapter;
import store.ckin.front.token.domain.TokenAuthRequest;
import store.ckin.front.util.AdapterHeaderUtil;

/**
 * TokenAdapter 의 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
@Component
@RequiredArgsConstructor
public class TokenAdapterImpl implements TokenAdapter {
    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    @Override
    public ResponseEntity<Void> getToken(LoginRequestDto loginRequestDto) {
        HttpHeaders headers = AdapterHeaderUtil.getHttpHeaders();

        HttpEntity<LoginRequestDto> requestEntity = new HttpEntity<>(loginRequestDto, headers);

        return restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/auth/login",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public ResponseEntity<Void> checkTokenAuth(TokenAuthRequest tokenAuthRequest) {
        String accessToken = tokenAuthRequest.getAccessToken();
        String email = tokenAuthRequest.getEmail();
        HttpHeaders headers = AdapterHeaderUtil.getHttpHeaders();
        headers.set("Authorization", accessToken);

        HttpEntity<String> requestEntity = new HttpEntity<>(email, headers);
        return restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/auth/token",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
