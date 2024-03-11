package store.ckin.front.review.adapter;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.dto.response.ReviewDto;

import java.util.List;

/**
 * ReviewAdapter
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
public interface ReviewAdapter {

    /**
     * 리뷰 업로드를 호출하는 메소드 입니다.
     *
     * @param createReviewRequestDto 도서 아이디, 리뷰 점수, 리뷰 코멘트를 담고 있는 DTO 입니다.
     * @param imageList              리뷰의 이미지 리스트를 담고 있는 MultipartFile 리스트 입니다.
     */
    void postReview(CreateReviewRequestDto createReviewRequestDto, List<MultipartFile> imageList);

    /**
     * 도서 아이디로 해당되는 리뷰 목록을 요청하는 메소드 입니다.
     *
     * @param pageable 리뷰 페이지
     * @param bookId 도서 아이디
     * @return 리뷰 DTO 페이지
     */
    PageDto<ReviewDto> getReviewListByBookId(Pageable pageable, Long bookId);
}
