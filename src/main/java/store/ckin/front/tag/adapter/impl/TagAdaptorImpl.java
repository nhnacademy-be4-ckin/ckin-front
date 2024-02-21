package store.ckin.front.tag.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.awt.print.Pageable;
import java.net.URI;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.tag.adapter.TagAdaptor;
import store.ckin.front.tag.dto.request.TagCreateRequestDto;
import store.ckin.front.tag.dto.request.TagDeleteRequestDto;
import store.ckin.front.tag.dto.request.TagUpdateRequestDto;
import store.ckin.front.tag.dto.response.TagResponseDto;

/**
 * 태그 어댑터 구현 클래스
 *
 * @author 김준현
 * @version 2024. 02. 15.
 */
@Component
@RequiredArgsConstructor
public class TagAdaptorImpl implements TagAdaptor {
    private final RestTemplate restTemplate;
    private final GatewayProperties gatewayProperties;
    private static final String TAG_URL = "/api/tags";

    /**
     * {@inheritDoc}
     *
     * @param tagCreateRequestDto 태그 생성 요청 DTO
     */
    @Override
    public void insertTag(TagCreateRequestDto tagCreateRequestDto) {
        HttpEntity<TagCreateRequestDto> requestEntity = new HttpEntity<>(tagCreateRequestDto, getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + TAG_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    /**
     * {@inheritDoc}
     *
     * @return 현재까지 저장된 태그 목록을 가져옴
     */
    @Override
    public PagedResponse<List<TagResponseDto>> selectTagList(int page, int size) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(TAG_URL)
                .queryParam("page", page)
                .queryParam("size", size)
                .encode().build().toUri();
        ResponseEntity<PagedResponse<List<TagResponseDto>>> exchange =
                restTemplate.exchange(uri,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param tagUpdateRequestDto 태그 수정 요청 DTO
     */
    @Override
    public void updateTag(TagUpdateRequestDto tagUpdateRequestDto) {
        HttpEntity<TagUpdateRequestDto> requestEntity = new HttpEntity<>(tagUpdateRequestDto, getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + TAG_URL,
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    /**
     * {@inheritDoc}
     *
     * @param tagDeleteRequestDto 태그 삭제 요청 DTO
     */
    @Override
    public void deleteTag(TagDeleteRequestDto tagDeleteRequestDto) {
        HttpEntity<TagDeleteRequestDto> requestEntity = new HttpEntity<>(tagDeleteRequestDto, getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + TAG_URL,
                HttpMethod.DELETE,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
