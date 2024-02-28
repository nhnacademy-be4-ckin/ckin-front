package store.ckin.front.book.adapter;

import java.util.List;
import store.ckin.front.book.dto.response.BookSaleResponseDto;

/**
 * 도서 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 28.
 */
public interface BookAdapter {

    List<BookSaleResponseDto> requestBookSaleList(List<Long> request);
}
