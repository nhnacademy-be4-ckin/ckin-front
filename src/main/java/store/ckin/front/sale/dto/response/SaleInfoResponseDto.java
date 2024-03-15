package store.ckin.front.sale.dto.response;

import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 주문 정보 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@ToString
@Getter
@NoArgsConstructor
public class SaleInfoResponseDto {

    private String saleTitle;

    private String saleNumber;

    private String memberEmail;

    private String saleOrdererName;

    private String saleOrdererContact;

    private Integer totalPrice;

    private LocalDateTime saleDate;
}
