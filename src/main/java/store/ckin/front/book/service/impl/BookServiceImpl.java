package store.ckin.front.book.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.service.BookService;

/**
 * 도서 서비스 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 28.
 */

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookAdapter bookAdapter;

    @Override
    public List<BookExtractionResponseDto> getBookSaleList(List<Long> bookIds) {
        return bookAdapter.requestBookSaleList(bookIds);
    }
}
