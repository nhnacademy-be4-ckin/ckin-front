package store.ckin.front.coupontemplate.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.coupontemplate.adapter.CouponTemplateAdapter;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

/**
 * CouponTemplateAdapterImpl
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
     * @return 생일 쿠폰 템플릿 응답 DTO 리스트
     */
    @Override
    public PageDto<GetCouponTemplateResponseDto> getCouponTemplateList(Pageable pageable, Long typeId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        String url = UriComponentsBuilder.fromHttpUrl(portProperties.getGatewayUri() + "/coupon/couponTemplate")
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .queryParam("type", typeId)
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
     * {@inheritDoc}
     */
    @Override
    public void deleteCouponTemplate(Long templateId) {
        HttpEntity<Long> requestEntity = new HttpEntity<>(templateId, getHttpHeaders());

        ResponseEntity<Void> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/coupon/couponTemplate/" + templateId,
                        HttpMethod.DELETE,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });
    }
}

