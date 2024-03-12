package store.ckin.front.booksale.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 도서 주문 리스트 정보 응답 DTO 입니다.
 *
 * @author 정승조
 * @version 2024. 03. 12.
 */

@ToString
@Getter
@NoArgsConstructor
public class BookAndBookSaleResponseDto {

    private Long bookId;

    private String fileUrl;

    private String bookTitle;

    private Integer quantity;

    private Long couponId;

    private String packagingType;

    private Integer packagingPrice;

    private Integer paymentAmount;
}
