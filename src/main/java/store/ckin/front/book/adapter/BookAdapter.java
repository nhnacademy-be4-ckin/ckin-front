package store.ckin.front.book.adapter;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * BookAdapter 인터페이스.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
public interface BookAdapter {
    String requestUploadDescriptionImage(MultipartFile file);

    void requestCreateBook(BookCreateRequestDto bookCreateRequestDto, MultipartFile file);
    PageDto<BookListResponseDto> findAllBooks(Pageable pageable);

    BookResponseDto findProductById(Long bookId);
}
