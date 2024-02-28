package store.ckin.front.book.service;

import java.util.List;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;

/**
 * 도서 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 28.
 */
public interface BookService {

    List<BookExtractionResponseDto> getBookSaleList(List<Long> bookIds);
}
