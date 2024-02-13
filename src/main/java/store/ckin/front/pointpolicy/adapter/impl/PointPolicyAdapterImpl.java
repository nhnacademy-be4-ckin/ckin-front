package store.ckin.front.pointpolicy.adapter.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.PortProperties;
import store.ckin.front.pointpolicy.adapter.PointPolicyAdapter;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;

/**
 * 포인트 정책 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 12.
 */

@Component
@RequiredArgsConstructor
public class PointPolicyAdapterImpl implements PointPolicyAdapter {

    private final RestTemplate restTemplate;

    private final PortProperties portProperties;

    @Override
    public void requestCreatePointPolicy(CreatePointPolicyRequestDto request) {
        HttpEntity<CreatePointPolicyRequestDto> requestEntity = new HttpEntity<>(request, getHttpHeaders());

        restTemplate.exchange(portProperties.getApiAddress() + "/api/point-policies",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                });
    }

    @Override
    public List<PointPolicyResponseDto> requestPointPolicies() {
        HttpEntity<PointPolicyResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<PointPolicyResponseDto>> exchange =
                restTemplate.exchange(portProperties.getApiAddress() + "/api/point-policies",
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    @Override
    public void requestDeletePointPolicy(Long id) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        restTemplate.exchange(
                portProperties.getApiAddress() + "/api/point-policies/{id}",
                HttpMethod.DELETE,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                }, id);
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));
        return httpHeaders;
    }
}
