package store.ckin.front.book.service;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * BookService 인터페이스.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
public interface BookService {
    void createBook(BookCreateRequestDto requestDto, MultipartFile file);

    String uploadDescriptionImage(MultipartFile file);

    PageDto<BookListResponseDto> findAllBooks(Pageable pageable);

    /**
     * bookId로 상품 상세 정보를 가져오는 메서드 입니다.
     *
     * @param bookId
     * @return 상품 상세 정보 DTO
     */
    BookResponseDto findProductById(Long bookId);

    List<BookExtractionResponseDto> getBookSaleList(List<Long> bookIds);


}
