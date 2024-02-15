package store.ckin.front.deliverypolicy.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.PortProperties;
import store.ckin.front.deliverypolicy.adapter.DeliveryPolicyAdapter;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;

/**
 * 배송비 정책 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */

@Component
@RequiredArgsConstructor
public class DeliveryPolicyAdapterImpl implements DeliveryPolicyAdapter {

    private final RestTemplate restTemplate;

    private final PortProperties portProperties;

    private static final String DELIVERY_POLICY_URL = "/api/delivery-policies";

    /**
     * {@inheritDoc}
     *
     * @return 배송비 정책 응답 DTO 리스트
     */
    @Override
    public List<DeliveryPolicyResponseDto> requestDeliveryPolicies() {

        HttpEntity<DeliveryPolicyResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<DeliveryPolicyResponseDto>> exchange =
                restTemplate.exchange(portProperties.getApiAddress() + DELIVERY_POLICY_URL,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param request 생성할 배송비 정책 요청 DTO
     */
    @Override
    public void requestCreateDeliveryPolicy(DeliveryPolicyCreateRequestDto request) {

        HttpEntity<DeliveryPolicyCreateRequestDto> requestEntity = new HttpEntity<>(request, getHttpHeaders());


        restTemplate.exchange(portProperties.getApiAddress() + DELIVERY_POLICY_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
