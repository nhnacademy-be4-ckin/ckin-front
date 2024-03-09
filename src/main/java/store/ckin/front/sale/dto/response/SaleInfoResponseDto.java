package store.ckin.front.sale.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 주문 정보 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@Getter
@NoArgsConstructor
public class SaleInfoResponseDto {

    private String saleNumber;

    private String saleTitle;

    private String memberEmail;

    private String saleOrdererName;

    private String saleOrdererContact;

    private Integer totalPrice;
}
