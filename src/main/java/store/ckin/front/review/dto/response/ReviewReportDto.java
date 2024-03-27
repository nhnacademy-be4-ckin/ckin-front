package store.ckin.front.review.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 리뷰를 작성한 기록이 있는지 반환하는 DTO 입니다.
 *
 * @author : gaeun
 * @version : 2024. 03. 26
 */

@Getter
@NoArgsConstructor
public class ReviewReportDto {
    private Long reviewId;
}
