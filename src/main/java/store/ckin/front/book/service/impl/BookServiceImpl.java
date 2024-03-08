package store.ckin.front.book.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.book.service.BookService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * BookService 구현 클래스.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookAdapter bookAdapter;


    @Override
    public void createBook(BookCreateRequestDto requestDto, MultipartFile file) {
        bookAdapter.requestCreateBook(requestDto, file);
    }

    @Override
    public String uploadDescriptionImage(MultipartFile file) {
        // 이미지 파일을 BookAdapter를 통해 업로드하고, 업로드된 이미지의 URL을 반환
        return bookAdapter.requestUploadDescriptionImage(file);
    }

    @Override
    public PageDto<BookListResponseDto> findAllBooks(Pageable pageable) {
        return bookAdapter.findAllBooks(pageable);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public BookResponseDto findProductById(Long bookId) {
        return bookAdapter.findProductById(bookId);
    }

    @Override
    public List<BookExtractionResponseDto> getBookSaleList(List<Long> bookIds) {
        return bookAdapter.requestBookSaleList(bookIds);
    }

}
