package store.ckin.front.couponpolicy.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.couponpolicy.adapter.CouponPolicyAdapter;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;

import java.util.List;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

/**
 * 쿠폰 정책 어댑터 구현 클래스입니다.
 *
 * @author 이가은
 * @version 2024. 02. 15.
 */

@Component
@RequiredArgsConstructor
public class CouponPolicyAdapterImpl implements CouponPolicyAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties portProperties;


    /**
     * {@inheritDoc}
     *
     * @return 쿠폰 정책 응답 DTO 리스트
     */
    @Override
    public List<GetCouponPolicyResponseDto> getCouponPolicies() {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());


        ResponseEntity<List<GetCouponPolicyResponseDto>> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/coupon/couponPolicy",
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void createCouponPolicy(CreateCouponPolicyRequestDto couponPolicyRequestDto) {
        HttpEntity<CreateCouponPolicyRequestDto> requestEntity = new HttpEntity<>(couponPolicyRequestDto, getHttpHeaders());


        ResponseEntity<Void> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/coupon/couponPolicy",
                        HttpMethod.POST,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });
    }

}
