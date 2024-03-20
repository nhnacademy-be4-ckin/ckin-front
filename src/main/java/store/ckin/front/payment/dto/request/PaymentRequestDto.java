package store.ckin.front.payment.dto.request;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import store.ckin.front.payment.dto.PaymentStatus;

/**
 * 결제 요청 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@ToString
@Getter
@AllArgsConstructor
public class PaymentRequestDto {

    private String paymentKey;

    private String saleNumber;

    private PaymentStatus paymentStatus;

    private LocalDateTime requestedAt;

    private LocalDateTime approvedAt;

    private Integer amount;

    private String receiptUrl;
}
