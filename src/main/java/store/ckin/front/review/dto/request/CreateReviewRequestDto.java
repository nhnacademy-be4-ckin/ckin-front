package store.ckin.front.review.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 리뷰 생성 요청 DTO입니다.
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
@Getter
@AllArgsConstructor
public class CreateReviewRequestDto {
    private Long memberId;
    private Long bookId;
    private Integer reviewRate;
    private String reviewComment;
}
