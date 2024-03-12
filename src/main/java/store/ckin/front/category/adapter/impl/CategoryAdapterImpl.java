package store.ckin.front.category.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
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
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.config.properties.GatewayProperties;

/**
 * CategoryAdapter 구현 클래스.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 15.
 */
@Component
@RequiredArgsConstructor
public class CategoryAdapterImpl implements CategoryAdapter {
    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String CATEGORY_URL = "/api/categories";

    @Override
    public void requestCreateCategory(CategoryCreateRequestDto categoryCreateRequestDto) {
        String url = gatewayProperties.getGatewayUri() + CATEGORY_URL;
        restTemplate.postForEntity(url, new HttpEntity<>(categoryCreateRequestDto, getHttpHeaders()), Void.class);
    }

    @Override
    public List<CategoryResponseDto> requestGetTopCategories() {
        String url = gatewayProperties.getGatewayUri() + CATEGORY_URL + "/top";
        ResponseEntity<List<CategoryResponseDto>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                new HttpEntity<>(getHttpHeaders()),
                new ParameterizedTypeReference<>() {
                });
        return response.getBody();

    }

    @Override
    public List<CategoryResponseDto> requestGetSubcategories(Long parentId) {
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + CATEGORY_URL)
                .pathSegment(parentId.toString(), "subcategories").encode().toUriString();
        ResponseEntity<List<CategoryResponseDto>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                new HttpEntity<>(getHttpHeaders()),
                new ParameterizedTypeReference<>() {
                });
        return response.getBody();
    }

    @Override
    public void requestUpdateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto) {
        String url = gatewayProperties.getGatewayUri() + CATEGORY_URL + "/" + categoryId;
        restTemplate.exchange(url,
                HttpMethod.PUT,
                new HttpEntity<>(categoryUpdateDto, getHttpHeaders()),
                Void.class);
    }

    @Override
    public void requestDeleteCategory(Long categoryId) {
        String url = gatewayProperties.getGatewayUri() + CATEGORY_URL + "/" + categoryId;
        restTemplate.exchange(url,
                HttpMethod.DELETE,
                new HttpEntity<>(getHttpHeaders()),
                Void.class);
    }

    @Override
    public List<CategoryResponseDto> getSubcategories(Long parentId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<CategoryResponseDto>> exchange =
                restTemplate.exchange(
                        gatewayProperties.getGatewayUri() + "/api/categories/" + parentId + "/subcategories",
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

}
