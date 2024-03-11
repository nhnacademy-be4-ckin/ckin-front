package store.ckin.front.review.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.review.adapter.ReviewAdapter;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;

import javax.validation.Valid;
import java.util.List;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;


/**
 * 리뷰 어댑터 구현 클래스입니다.
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
@Component
@RequiredArgsConstructor
public class ReviewAdapterImpl implements ReviewAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;


    /**
     * {@inheritDoc}
     *
     * @param createReviewRequestDto 도서 아이디, 리뷰 점수, 리뷰 코멘트를 담고 있는 DTO 입니다.
     * @param imageList              리뷰의 이미지 리스트를 담고 있는 MultipartFile 리스트 입니다.
     */
    @Override
    public void postReview(@Valid CreateReviewRequestDto createReviewRequestDto,
                           List<MultipartFile> imageList) {
        String url = gatewayProperties.getGatewayUri() + "/api/review/";

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("createRequestDto", createReviewRequestDto);
        try {
            for (MultipartFile file : imageList) {
                body.add("imageList", file.getResource());
            }
        } catch (Exception e) {
            throw new RuntimeException();
        }

        HttpEntity<MultiValueMap<String, Object>> requestEntity =
                new HttpEntity<>(body, getHttpHeaders(MediaType.MULTIPART_FORM_DATA));

        restTemplate.exchange(
                url,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
