package store.ckin.front.review.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.review.adapter.ReviewAdapter;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.dto.request.UpdateReviewRequestDto;
import store.ckin.front.review.dto.response.MyPageReviewResponseDto;
import store.ckin.front.review.dto.response.ReviewDto;
import store.ckin.front.review.dto.response.ReviewReportDto;


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
        String url = gatewayProperties.getGatewayUri() + "/api/review";

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

    /**
     * {@inheritDoc}
     *
     * @param pageable 리뷰 페이지
     * @param bookId   도서 아이디
     * @return 리뷰 목록 페이지 DTO
     */
    @Override
    public PageDto<ReviewDto> getReviewListByBookId(Pageable pageable, Long bookId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        String url = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + "/api/review/" + bookId)
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<ReviewDto>> exchange = restTemplate.exchange(
                url,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<PageDto<ReviewDto>>() {
                }
        );
        return exchange.getBody();
    }

    @Override
    public PageDto<MyPageReviewResponseDto> getMyPageReviewResponseDto(Pageable pageable, String memberId) {
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, getHttpHeaders());

        String url = UriComponentsBuilder.fromHttpUrl(
                        gatewayProperties.getGatewayUri() + "/api/members/review/my-page/{memberId}")
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .encode()
                .toUriString();

        ResponseEntity<PageDto<MyPageReviewResponseDto>> exchange = restTemplate.exchange(
                url,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId
        );
        return exchange.getBody();
    }

    @Override
    public void updateReview(UpdateReviewRequestDto updateReviewRequestDto,
                             Long memberId) {
        String url = gatewayProperties.getGatewayUri() + "/api/members/review/" + memberId;


        HttpEntity<UpdateReviewRequestDto> requestEntity = new HttpEntity<>(updateReviewRequestDto, getHttpHeaders());

        restTemplate.exchange(
                url,
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public ReviewReportDto isExistReport(Long memberId, Long bookId) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<ReviewReportDto> exchange = restTemplate.exchange(
                 gatewayProperties.getGatewayUri() + "/api/review/check/member/" + memberId + "/book/" + bookId,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }


}
