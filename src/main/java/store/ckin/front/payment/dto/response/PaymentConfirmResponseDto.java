package store.ckin.front.payment.dto.response;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import lombok.Getter;
import lombok.ToString;

/**
 * 결제 확인 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 10.
 */

@ToString
@Getter
public class PaymentConfirmResponseDto {

    private String orderId;

    private String paymentKey;

    private String status;

    private String totalAmount;

    private LocalDateTime requestedAt;

    private LocalDateTime approvedAt;

    private Receipt receipt;


    /**
     * 결제 확인 응답 DTO.
     *
     * @param orderId     주문 ID
     * @param paymentKey  결제 키
     * @param status      결제 상태
     * @param totalAmount 총 결제 금액
     * @param requestedAt 결제 요청 시간
     * @param approvedAt  결제 승인 시간
     * @param receipt     영수증
     */
    public PaymentConfirmResponseDto(String orderId, String paymentKey, String status, String totalAmount,
                                     OffsetDateTime requestedAt, OffsetDateTime approvedAt, Receipt receipt) {
        this.orderId = orderId;
        this.paymentKey = paymentKey;
        this.status = status;
        this.totalAmount = totalAmount;
        this.requestedAt = requestedAt.toLocalDateTime();
        this.approvedAt = approvedAt.toLocalDateTime();
        this.receipt = receipt;
    }
}
