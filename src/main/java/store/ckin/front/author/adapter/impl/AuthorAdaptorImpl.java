package store.ckin.front.author.adapter.impl;

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
import store.ckin.front.author.PageResponse;
import store.ckin.front.author.adapter.AuthorAdaptor;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
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


    @Override
    public PageResponse<AuthorResponseDto> requestGetAllAuthors(Pageable pageable) {

        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + AUTHOR_URL)
                .queryParam("page", pageable.getPageNumber()).queryParam("size", pageable.getPageSize()).encode()
                .toUriString();

        ResponseEntity<PageResponse<AuthorResponseDto>> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        new HttpEntity<>(getHttpHeaders()),
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    @Override
    public List<AuthorResponseDto> requestGetAuthorsByName(String name) {
        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + AUTHOR_URL + "/search")
                .queryParam("name", name).encode().toUriString();

        ResponseEntity<List<AuthorResponseDto>> exchange =
                restTemplate.exchange(url,
                        HttpMethod.GET,
                        new HttpEntity<>(getHttpHeaders()),
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }


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


    @Override
    public AuthorResponseDto requestCreateAuthor(AuthorCreateRequestDto authorCreateRequestDto) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL;
        ResponseEntity<AuthorResponseDto> response = restTemplate.postForEntity(url,
                new HttpEntity<>(authorCreateRequestDto, getHttpHeaders()),
                AuthorResponseDto.class);

        return response.getBody();
    }

    @Override
    public AuthorResponseDto requestModifyAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL + "/" + id;
        ResponseEntity<AuthorResponseDto> response = restTemplate.exchange(url,
                HttpMethod.PUT,
                new HttpEntity<>(authorModifyRequestDto, getHttpHeaders()),
                AuthorResponseDto.class);

        return response.getBody();
    }


    @Override
    public void requestDeleteAuthor(Long id) {
        String url = gatewayProperties.getGatewayUri() + AUTHOR_URL + "/" + id;
        restTemplate.exchange(url, HttpMethod.DELETE, new HttpEntity<>(getHttpHeaders()), Void.class);
    }
}
