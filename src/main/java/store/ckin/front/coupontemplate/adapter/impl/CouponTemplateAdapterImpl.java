package store.ckin.front.coupontemplate.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.coupontemplate.adapter.CouponTemplateAdapter;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.net.URL;
import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */

@Component
@RequiredArgsConstructor
public class CouponTemplateAdapterImpl implements CouponTemplateAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties portProperties;


    /**
     * {@inheritDoc}
     *
     * @return 쿠폰 정책 응답 DTO 리스트
     */
    @Override
    public PageDto<GetCouponTemplateResponseDto> getBirthCouponTemplateList(Pageable pageable) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        String url = UriComponentsBuilder.fromHttpUrl(portProperties.getGatewayUri() + "/coupon/couponTemplate/birth")
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<GetCouponTemplateResponseDto>> exchange =
                restTemplate.exchange(url,
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
    public void createCouponTemplate(CreateCouponTemplateRequestDto couponTemplateRequestDto) {
        HttpEntity<CreateCouponTemplateRequestDto> requestEntity = new HttpEntity<>(couponTemplateRequestDto, getHttpHeaders());


        ResponseEntity<Void> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/coupon/couponTemplate",
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

