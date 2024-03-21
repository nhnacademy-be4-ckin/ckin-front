package store.ckin.front.review.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.review.adapter.ReviewAdapter;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.dto.request.UpdateReviewRequestDto;
import store.ckin.front.review.dto.response.MyPageReviewResponseDto;
import store.ckin.front.review.dto.response.ReviewDto;
import store.ckin.front.review.service.ReviewService;

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
     * {@inheritDoc}
     *
     * @param createReviewRequestDto 도서 아이디, 리뷰 점수, 리뷰 코멘트를 담고 있는 DTO 입니다.
     * @param imageList              리뷰의 이미지 리스트를 담고 있는 MultipartFile 리스트 입니다.
     */
    @Override
    public void postReview(CreateReviewRequestDto createReviewRequestDto, List<MultipartFile> imageList) {
        reviewAdapter.postReview(createReviewRequestDto, imageList);
    }

    /**
     * {@inheritDoc}
     *
     * @param pageable 리뷰 페이지
     * @param bookId   도서 아이디
     * @return 리뷰 응답 DTO 페이지
     */
    @Override
    public PageDto<ReviewDto> getReviewListByBookId(Pageable pageable, Long bookId) {
        return reviewAdapter.getReviewListByBookId(pageable, bookId);
    }

    @Override
    public PageDto<MyPageReviewResponseDto> getMyPageReviewResponseDto(Pageable pageable, String memberId) {
        return reviewAdapter.getMyPageReviewResponseDto(pageable, memberId);
    }

    @Override
    public void updateReview(UpdateReviewRequestDto updateReviewRequestDto, Long memberId) {
        reviewAdapter.updateReview(updateReviewRequestDto, memberId);
    }


}
