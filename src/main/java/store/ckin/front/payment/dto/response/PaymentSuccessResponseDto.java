package store.ckin.front.payment.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

/**
 * 결제 성공 응답 DTO 클래스입니다.
 * <p>응답 객체를 생성하고, @ModelAttribute 를 통해 View 에서 사용할 수 있도록 합니다.</p>
 *
 * @author 정승조
 * @version 2024. 03. 11.
 */

@ToString
@Getter
@AllArgsConstructor
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
