package store.ckin.front.tag.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.PortProperties;
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
    private final PortProperties portProperties;
    private static final String TAG_URL = "/api/tags";

    /**
     * {@inheritDoc}
     *
     * @param tagCreateRequestDto 태그 생성 요청 DTO
     */
    @Override
    public void insertTag(TagCreateRequestDto tagCreateRequestDto) {
        HttpEntity<TagCreateRequestDto> requestEntity = new HttpEntity<>(tagCreateRequestDto, getHttpHeaders());

        restTemplate.exchange(portProperties.getGatewayAddress() + TAG_URL,
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
    public List<TagResponseDto> selectTagList() {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<TagResponseDto>> exchange =
                restTemplate.exchange(portProperties.getGatewayAddress() + TAG_URL,
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

        restTemplate.exchange(portProperties.getGatewayAddress() + TAG_URL,
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

        restTemplate.exchange(portProperties.getGatewayAddress() + TAG_URL,
                HttpMethod.DELETE,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
