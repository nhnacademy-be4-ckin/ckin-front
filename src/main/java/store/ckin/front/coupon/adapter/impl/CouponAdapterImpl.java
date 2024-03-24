package store.ckin.front.coupon.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.net.URI;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.coupon.adapter.CouponAdapter;
import store.ckin.front.coupon.dto.response.CouponCountResponseDto;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;


/**
 * 쿠폰 정책 어댑터 구현 클래스입니다.
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */

@Slf4j
@Component
@RequiredArgsConstructor
public class CouponAdapterImpl implements CouponAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;


    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/coupon")
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
                restTemplate.exchange(gatewayProperties.getGatewayUri() + "/coupon/" + couponId,
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
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/coupon?typeId=" + typeId)
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
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/coupon/member/" + memberId)
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

    @Override
    public Boolean createCouponByIds(Long memberId, Long couponTemplateId) {
        HttpEntity<Boolean> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<Boolean> exchange =
                restTemplate.exchange(
                        gatewayProperties.getGatewayUri() + "/coupon/members/" + memberId + "/" + couponTemplateId,
                        HttpMethod.POST,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });
        return exchange.getBody();
    }

    @Override
    public void updateCouponUsed(List<Long> couponIds) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        String requestUrl = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/coupon")
                .queryParam("couponId", couponIds)
                .encode()
                .toUriString();

        log.debug("requestUrl : {}", requestUrl);

        restTemplate.exchange(requestUrl,
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public PageDto<GetCouponResponseDto> getUnUsedCouponByMember(Pageable pageable, Long memberId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        String url = UriComponentsBuilder.fromHttpUrl(
                        gatewayProperties.getGatewayUri() + "/coupon/members/unUsed/" + memberId)
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

    @Override
    public PageDto<GetCouponResponseDto> getUsedCouponByMember(Pageable pageable, Long memberId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        String url = UriComponentsBuilder.fromHttpUrl(
                        gatewayProperties.getGatewayUri() + "/coupon/members/used/" + memberId)
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

    @Override
    public CouponCountResponseDto getCountCouponByMember(Long memberId) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        URI url = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path("/coupon/members/{memberId}/count")
                .encode()
                .buildAndExpand(memberId)
                .toUri();

        ResponseEntity<CouponCountResponseDto> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }
}
