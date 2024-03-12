package store.ckin.front.payment.dto.response;

import java.time.OffsetDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 결제 확인 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 10.
 */

@ToString
@Getter
@NoArgsConstructor
public class PaymentConfirmResponseDto {

    private String orderId;

    private String paymentKey;

    private String status;

    private String totalAmount;

    private OffsetDateTime requestedAt;

    private OffsetDateTime approvedAt;

    private Receipt receipt;

    /**
     * 토스 페이먼츠 API 영수증 DTO.
     */
    @ToString
    @Getter
    @NoArgsConstructor
    public static class Receipt {

        private String url;
    }

}
