package store.ckin.front.sale.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 주문 취소 요청 DTO 입니다.
 *
 * @author 정승조
 * @version 2024. 03. 19.
 */
@Getter
@NoArgsConstructor
public class SaleCancelRequestDto {

    private String cancelReason;
}
