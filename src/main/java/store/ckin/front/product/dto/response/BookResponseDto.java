package store.ckin.front.product.dto.response;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * BookResponseDto 단일 조회 dto클래스.
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
@Getter
@NoArgsConstructor
public class BookResponseDto {
    private Long bookId;
    private String bookIsbn;
    private String bookTitle;
    private String bookDescription;
    private String bookPublisher;
    private String bookPublicationDate;
    private String bookIndex;
    private Boolean bookPackaging;
    private Integer bookStock;
    private Integer bookRegularPrice;
    private Integer bookDiscountRate;
    private String bookState;
    private Integer bookSalePrice;
    private String bookReviewRate;
    private String thumbnail;
    private List<String> authorNames;
    private List<String> categoryNames;
    private List<String> tagNames;
}
