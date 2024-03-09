package store.ckin.front.book.dto.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

/**
 * 도서 정보 추출 응답 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 28.
 */

@ToString
@Getter
@AllArgsConstructor
public class BookExtractionResponseDto {

    private Long bookId;

    private String bookImageUrl;

    private String bookTitle;

    private Boolean bookPackaging;

    private Integer bookSalePrice;

    private Integer bookStock;

    private List<Long> categoryIds;

    private Integer quantity;

    public void updateQuantity(int quantity) {
        this.quantity = quantity;
    }
}
