package store.ckin.front.couponpolicy.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.couponpolicy.adapter.CouponPolicyAdapter;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;

import java.util.List;

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
     *
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


    /**
     * 헤더 생성 메서드입니다.
     *
     * @return Http 헤더
     */
    private static HttpHeaders getHttpHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));
        return httpHeaders;
    }
}
