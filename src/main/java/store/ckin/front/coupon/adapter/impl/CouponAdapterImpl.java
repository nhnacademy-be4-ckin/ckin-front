package store.ckin.front.coupon.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Pageable;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.coupon.adapter.CouponAdapter;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import static store.ckin.front.util.AdapterHeaderUtil.*;


/**
 * 쿠폰 정책 어댑터 구현 클래스입니다.
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
@Component
@RequiredArgsConstructor
public class CouponAdapterImpl implements CouponAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties portProperties;


    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(portProperties.getGatewayUri() + "/coupon")
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<GetCouponResponseDto>> exchange =
                restTemplate.exchange(url,
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
    public GetCouponResponseDto getCouponByCouponId(Long couponId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<GetCouponResponseDto> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/coupon/" + couponId,
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
    public PageDto<GetCouponResponseDto> getCouponList(Pageable pageable, Long typeId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(portProperties.getGatewayUri() + "/coupon?typeId=" + typeId)
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<GetCouponResponseDto>> exchange =
                restTemplate.exchange(url,
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
    public PageDto<GetCouponResponseDto> getCouponByMemberId(Pageable pageable, Long memberId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(portProperties.getGatewayUri() + "/coupon/member/" + memberId)
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<GetCouponResponseDto>> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

}