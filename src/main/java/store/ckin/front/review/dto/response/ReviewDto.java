package store.ckin.front.review.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 리뷰 응답 DTO입니다.
 *
 * @author : gaeun
 * @version : 2024. 03. 08
 */
@Getter
@AllArgsConstructor
public class ReviewDto {
    private Long reviewId;
    private String author;
    private String message;
    private Integer reviewRate;
    private String reviewDate;
}
