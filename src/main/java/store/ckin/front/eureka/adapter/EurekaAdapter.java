package store.ckin.front.eureka.adapter;


import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.GatewayProperties;

/**
 * Eureka 테스트용 어댑터입니다.
 *
 * @author 정승조
 * @version 2024. 02. 18.
 */

@Component
@RequiredArgsConstructor
public class EurekaAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;


    public String getEurekaPort() {

        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<String> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/eureka",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }
}
