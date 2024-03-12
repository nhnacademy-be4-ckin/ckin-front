package store.ckin.front.book.adapter;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.request.BookModifyRequestDto;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * 도서 어댑터 인터페이스입니다.
 *
 * @author 나국로, 정승조
 * @version 2024. 02. 28.
 */
public interface BookAdapter {
    String requestUploadDescriptionImage(MultipartFile file);

    void requestCreateBook(BookCreateRequestDto bookCreateRequestDto, MultipartFile file);

    PageDto<BookListResponseDto> findAllBooks(Pageable pageable);

    BookResponseDto findProductById(Long bookId);

    List<BookExtractionResponseDto> requestBookSaleList(List<Long> request);


    void requestUpdateBook(BookModifyRequestDto bookModifyRequestDto, Long bookId);

    void requestUpdateBookThumbnail(Long bookId, MultipartFile file);
}
