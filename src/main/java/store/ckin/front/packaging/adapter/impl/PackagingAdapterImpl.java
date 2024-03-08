package store.ckin.front.packaging.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.packaging.adapter.PackagingAdapter;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.request.PackagingUpdateRequestDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;

import java.util.List;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

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

    /**
     * {@inheritDoc}
     *
     * @param id 조회할 포장 정책 ID
     * @return 포장 정책 응답 DTO
     */
    @Override
    public PackagingResponseDto requestGetPackagingPolicy(Long id) {

        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());


        ResponseEntity<PackagingResponseDto> exchange =
                restTemplate.exchange(gatewayProperties.getGatewayUri() + PACKAGING_URL + "/{id}",
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        }, id);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @return 포장 정책 응답 DTO 리스트
     */
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

    /**
     * {@inheritDoc}
     *
     * @param requestDto 포장 정책 수정 요청 DTO
     */
    @Override
    public void requestUpdatePackagingPolicy(PackagingUpdateRequestDto requestDto) {

        HttpEntity<PackagingUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto, getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + PACKAGING_URL,
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                });
    }

    /**
     * {@inheritDoc}
     *
     * @param id 삭제할 포장 정책 ID
     */
    @Override
    public void requestDeletePackagingPolicy(Long id) {

        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + PACKAGING_URL + "/{id}",
                HttpMethod.DELETE,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                }, id);
    }
}
