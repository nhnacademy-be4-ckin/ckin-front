package store.ckin.front.review.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * UpdateReviewRequestDto.
 *
 * @author 나국로
 * @version 2024. 03. 19.
 */
@Getter
@NoArgsConstructor
public class UpdateReviewRequestDto {
    private Integer reviewRate;
    private String reviewComment;
}