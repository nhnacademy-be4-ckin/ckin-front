package store.ckin.front.payment.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 결제 취소 요청 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 19.
 */
@Getter
@AllArgsConstructor
public class PaymentCancelRequestDto {

    private String paymentKey;

    private String cancelReason;
}
