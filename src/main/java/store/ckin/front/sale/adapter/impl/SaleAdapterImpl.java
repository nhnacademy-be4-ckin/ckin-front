package store.ckin.front.sale.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.sale.adapter.SaleAdapter;

/**
 * 주문 어댑터 구현 클래스.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Component
@RequiredArgsConstructor
public class SaleAdapterImpl implements SaleAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String COUPON_URL = "/coupon";


    @Override
    public List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId) {

        HttpEntity<GetCouponResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<PageDto<GetCouponResponseDto>> exchange =
                restTemplate.exchange(gatewayProperties.getGatewayUri() + COUPON_URL + "/member/{memberId}",
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        }, memberId);

        return Objects.requireNonNull(exchange.getBody()).getContent();
    }
}
