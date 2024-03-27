package store.ckin.front.review.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 리뷰를 등록한 기록이 있는지 확인하기 위한 요청 DTO 입니다.
 *
 * @author : gaeun
 * @version : 2024. 03. 26
 */
@Getter
@AllArgsConstructor
public class ReviewReportRequestDto {
    private Long memberId;
    private Long bookId;
}
