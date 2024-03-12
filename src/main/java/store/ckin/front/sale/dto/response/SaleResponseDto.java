package store.ckin.front.sale.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * 주문 조회 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 03.
 */

@ToString
@Getter
@NoArgsConstructor
public class SaleResponseDto {

    /**
     * 주문의 배송 상태를 나타내는 Enum.
     */
    public enum DeliveryStatus {
        READY,
        IN_PROGRESS,
        DONE
    }

    /**
     * 주문의 결제 상태를 나타내는 Enum.
     */
    public enum PaymentStatus {
        WAITING,
        PAID
    }

    private Long saleId;

    private String memberEmail;

    private String saleNumber;

    private String saleOrdererName;

    private String saleOrdererContact;

    private String saleReceiverName;

    private String saleReceiverContact;

    private String saleReceiverAddress;

    private LocalDateTime saleDate;

    private LocalDateTime saleShippingDate;

    private LocalDate saleDeliveryDate;

    private DeliveryStatus saleDeliveryStatus;

    private Integer saleDeliveryFee;

    private Integer salePointUsage;

    private Integer saleTotalPrice;

    private PaymentStatus salePaymentStatus;

}
