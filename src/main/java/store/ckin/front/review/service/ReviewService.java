package store.ckin.front.review.service;

import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;

import java.util.List;

/**
 * ReviewService
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
public interface ReviewService {

    /**
     * 리뷰 업로드를 호출하는 메소드 입니다.
     *
     * @param createReviewRequestDto 도서 아이디, 리뷰 점수, 리뷰 코멘트를 담고 있는 DTO 입니다.
     * @param imageList              리뷰의 이미지 리스트를 담고 있는 MultipartFile 리스트 입니다.
     */
    void postReview(CreateReviewRequestDto createReviewRequestDto, List<MultipartFile> imageList);
}
