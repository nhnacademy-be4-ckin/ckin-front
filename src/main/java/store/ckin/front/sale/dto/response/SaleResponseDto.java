package store.ckin.front.sale.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import store.ckin.front.sale.dto.DeliveryStatus;
import store.ckin.front.sale.dto.SalePaymentStatus;

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

    private Long saleId;

    private String title;

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

    private SalePaymentStatus salePaymentStatus;

}
