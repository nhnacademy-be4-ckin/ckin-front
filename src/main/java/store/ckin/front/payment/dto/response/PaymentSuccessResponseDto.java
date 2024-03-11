package store.ckin.front.payment.dto.response;

import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

/**
 * 결제 성공 응답 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 11.
 */

@ToString
@Getter
@NoArgsConstructor
public class PaymentSuccessResponseDto {

    private String saleNumber;

    private String receiverName;

    private String receiverContact;

    private String address;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate deliveryDate;

    private Integer saleTotalPrice;

    private String receiptUrl;

}
