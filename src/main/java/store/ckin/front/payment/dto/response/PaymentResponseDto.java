package store.ckin.front.payment.dto.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

/**
 * 결제 조회 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 12.
 */

@ToString
@Getter
@AllArgsConstructor
public class PaymentResponseDto {

    private Long paymentId;

    private Long saleId;

    private String paymentKey;

    private String paymentStatus;

    private LocalDateTime requestedAt;

    private LocalDateTime approvedAt;

    private String receiptUrl;
}
