package store.ckin.front.review.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.review.adapter.ReviewAdapter;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.service.ReviewService;

import java.util.List;

/**
 * 리뷰 서비스 구현 클래스입니다.
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewAdapter reviewAdapter;

    /**
     * @{inheritDoc}
     *
     * @param createReviewRequestDto 도서 아이디, 리뷰 점수, 리뷰 코멘트를 담고 있는 DTO 입니다.
     * @param imageList              리뷰의 이미지 리스트를 담고 있는 MultipartFile 리스트 입니다.
     */
    @Override
    public void postReview(CreateReviewRequestDto createReviewRequestDto, List<MultipartFile> imageList) {
        reviewAdapter.postReview(createReviewRequestDto, imageList);
    }
}
