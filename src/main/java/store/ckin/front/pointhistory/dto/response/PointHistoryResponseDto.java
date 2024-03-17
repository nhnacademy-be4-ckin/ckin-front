package store.ckin.front.pointhistory.dto.response;

import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 포인트 내역 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 15.
 */

@ToString
@Getter
@NoArgsConstructor
public class PointHistoryResponseDto {

    private Long id;

    private Long memberId;

    private String pointHistoryReason;

    private Integer pointHistoryPoint;

    private LocalDate pointHistoryTime;

}
