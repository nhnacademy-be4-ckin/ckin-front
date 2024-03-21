package store.ckin.front.review.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * UpdateReviewRequestDto.
 *
 * @author 나국로
 * @version 2024. 03. 19.
 */
@Getter
@AllArgsConstructor
public class UpdateReviewRequestDto {
    private Long reviewId;
    private Integer reviewRate;
    private String reviewComment;
}
