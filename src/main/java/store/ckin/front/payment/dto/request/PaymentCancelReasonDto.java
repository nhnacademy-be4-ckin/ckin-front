package store.ckin.front.payment.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 주문 취소 사유가 담긴 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 19.
 */

@Getter
@AllArgsConstructor
public class PaymentCancelReasonDto {

    private String cancelReason;

}
