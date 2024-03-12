package store.ckin.front.sale.dto.response;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import store.ckin.front.booksale.dto.response.BookAndBookSaleResponseDto;
import store.ckin.front.payment.dto.response.PaymentResponseDto;

/**
 * 주문 상세 조회 응답 DTO 입니다.
 *
 * @author 정승조
 * @version 2024. 03. 12.
 */

@ToString
@Getter
@NoArgsConstructor
public class SaleDetailResponseDto {

    private List<BookAndBookSaleResponseDto> booksaleList;

    private SaleResponseDto saleResponseDto;

    private PaymentResponseDto paymentResponseDto;
}
