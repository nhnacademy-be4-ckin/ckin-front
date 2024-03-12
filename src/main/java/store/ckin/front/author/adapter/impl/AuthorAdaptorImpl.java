package store.ckin.front.author.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.author.adapter.AuthorAdaptor;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;
import store.ckin.front.config.properties.GatewayProperties;

/**
 * 작가 어댑터 구현 클래스입니다.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
@Component
@RequiredArgsConstructor
public class AuthorAdaptorImpl implements AuthorAdaptor {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String AUTHOR_URL = "/api/authors";

    /**
     * {@inheritDoc}
     */
    @Override
    public PageResponse<AuthorResponseDto> requestGetAllAuthors(Pageable pageable) {

        String baseUrl = gatewayProperties.getGatewayUri() + AUTHOR_URL;
        int pageNumber = pageable.getPageNumber();
        int pageSize = pageable.getPageSize();

        String url = baseUrl + "?page=" + pageNumber + "&size=" + pageSize;


        ResponseEntity<PageResponse<AuthorResponseDto>> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        new HttpEntity<>(getHttpHeaders()),
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public PageResponse<AuthorResponseDto> requestGetAuthorsByName(String name, Pageable pageable) {
        int pageNumber = pageable.getPageNumber();
        int pageSize = pageable.getPageSize();
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL + "/search?name=" + name + "&page=" + pageNumber +
                "&size=" + pageSize;

        ResponseEntity<PageResponse<AuthorResponseDto>> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        new HttpEntity<>(getHttpHeaders()),
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public AuthorResponseDto requestGetAuthorById(Long id) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL + "/" + id;
        ResponseEntity<AuthorResponseDto> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        new HttpEntity<>(getHttpHeaders()),
                        AuthorResponseDto.class);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void requestCreateAuthor(AuthorCreateRequestDto authorCreateRequestDto) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL;
        ResponseEntity<AuthorResponseDto> response = restTemplate.postForEntity(url,
                new HttpEntity<>(authorCreateRequestDto, getHttpHeaders()),
                AuthorResponseDto.class);

        response.getBody();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void requestModifyAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL + "/" + id;
        restTemplate.exchange(url,
                HttpMethod.PUT,
                new HttpEntity<>(authorModifyRequestDto, getHttpHeaders()),
                Void.class);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void requestDeleteAuthor(Long id) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL + "/" + id;
        restTemplate.exchange(url, HttpMethod.DELETE, new HttpEntity<>(getHttpHeaders()), Void.class);
    }
}
