package store.ckin.front.product.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.coupon.adapter.CouponAdapter;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;


/**
 * 쿠폰 정책 어댑터 구현 클래스입니다.
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
@Component
@RequiredArgsConstructor
public class CategoryAdapterImpl implements CategoryAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties portProperties;

    @Override
    public List<CategoryResponseDto> getSubcategories(Long parentId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<CategoryResponseDto>> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/api/categories/" + parentId + "/subcategories",
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }
}
