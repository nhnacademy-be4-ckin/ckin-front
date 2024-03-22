package store.ckin.front.product.adapter.impl;

import static store.ckin.front.product.service.impl.ProductServiceImpl.BEST_BOOK;
import static store.ckin.front.product.service.impl.ProductServiceImpl.RECOMMEND_BOOK;
import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Page;
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
import store.ckin.front.product.dto.response.BookMainPageResponseDto;
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

    private final GatewayProperties gatewayProperties;

    @Override
    public PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/api/books/search/by-category")
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
                restTemplate.exchange(gatewayProperties.getGatewayUri() + "/api/books/" + bookId,
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
    public List<BookMainPageResponseDto> findRecentBooks(Integer limit) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/api/books/main-page")
                .queryParam("limit", limit)
                .encode()
                .toUriString();

        ResponseEntity<List<BookMainPageResponseDto>> exchange =
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
    public List<BookMainPageResponseDto> getBestBooks(Integer limit) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/api/books/main-page/tag")
                .queryParam("limit", limit)
                .queryParam("tagName", BEST_BOOK)
                .encode()
                .toUriString();

        ResponseEntity<List<BookMainPageResponseDto>> exchange =
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
    public List<BookMainPageResponseDto> getRecommendBooks(Integer limit) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/api/books/main-page/tag")
                .queryParam("limit", limit)
                .queryParam("tagName", RECOMMEND_BOOK)
                .encode()
                .toUriString();

        ResponseEntity<List<BookMainPageResponseDto>> exchange =
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
    public PageDto<BookResponseDto> getRecentPublishedBook(Pageable pageable) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/api/books/recent")
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<BookResponseDto>> exchange =
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
    public PageDto<BookResponseDto> getBookPageByTagName(Pageable pageable, String tagName) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        ResponseEntity<PageDto<BookResponseDto>> exchange =
                restTemplate.exchange(gatewayProperties.getGatewayUri() + "/api/books/tag/" + tagName,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }
}
