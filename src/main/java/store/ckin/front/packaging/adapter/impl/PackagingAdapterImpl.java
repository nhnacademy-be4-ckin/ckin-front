package store.ckin.front.packaging.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.packaging.adapter.PackagingAdapter;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;

/**
 * 포인트 정책 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 12.
 */

@Component
@RequiredArgsConstructor
public class PackagingAdapterImpl implements PackagingAdapter {

    private static final String PACKAGING_URL = "/api/packaging";
    private final RestTemplate restTemplate;
    private final GatewayProperties gatewayProperties;

    /**
     * {@inheritDoc}
     *
     * @param requestDto 포장 정책 생성 요청 DTO
     */
    @Override
    public void requestCreatePackagingPolicy(PackagingCreateRequestDto requestDto) {

        HttpEntity<PackagingCreateRequestDto> requestEntity = new HttpEntity<>(requestDto, getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + PACKAGING_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                });
    }

    @Override
    public List<PackagingResponseDto> requestGetPackagingPolicies() {

        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<PackagingResponseDto>> exchange =
                restTemplate.exchange(gatewayProperties.getGatewayUri() + PACKAGING_URL,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }
}
