package store.ckin.front.product.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

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
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.adapter.ProductAdapter;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;


/**
 * 쿠폰 정책 어댑터 구현 클래스입니다.
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
@Component
@RequiredArgsConstructor
public class ProductAdapterImpl implements ProductAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties portProperties;

    @Override
    public PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(portProperties.getGatewayUri() + "/api/books/search/by-category")
                .queryParam("categoryId", categoryId)
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<BookListResponseDto>> exchange =
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
    public BookResponseDto findProductById(Long bookId) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<BookResponseDto> exchange =
                restTemplate.exchange(portProperties.getGatewayUri() + "/api/books/" + bookId,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });
        return exchange.getBody();
    }
}
