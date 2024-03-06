package store.ckin.front.book.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.config.properties.GatewayProperties;

/**
 * 도서 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 28.
 */

@Component
@RequiredArgsConstructor
public class BookAdapterImpl implements BookAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String BOOK_URI = "/api/books";

    @Override
    public List<BookExtractionResponseDto> requestBookSaleList(List<Long> request) {

        HttpEntity<List<BookExtractionResponseDto>> requestEntity = new HttpEntity<>(getHttpHeaders());

        String requestUrl =
                UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + BOOK_URI + "/extraction")
                        .queryParam("bookId", request)
                        .encode()
                        .toUriString();

        ResponseEntity<List<BookExtractionResponseDto>> exchange = restTemplate.exchange(
                requestUrl,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });


        return exchange.getBody();
    }
}
