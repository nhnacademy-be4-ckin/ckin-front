package store.ckin.front.payment.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

/**
 * 결제 요청 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 10.
 */

@ToString
@Getter
@AllArgsConstructor
public class PaymentConfirmRequestDto {

    String orderId;

    String amount;

    String paymentKey;
}
