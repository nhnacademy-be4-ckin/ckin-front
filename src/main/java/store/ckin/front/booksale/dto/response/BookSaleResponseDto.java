package store.ckin.front.booksale.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 도서 주문 응답 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 07.
 */
@Getter
@AllArgsConstructor
public class BookSaleResponseDto {

    private Long saleId;

    private Long bookId;

    private Long appliedCouponId;

    private String packagingType;

    private Integer packagingPrice;

    private Integer quantity;

    private Integer paymentAmount;
}
