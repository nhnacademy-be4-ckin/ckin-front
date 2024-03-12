package store.ckin.front.book.service;

import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.request.BookModifyRequestDto;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * BookService 인터페이스.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
public interface BookService {
    /**
     * 새로운 도서를 생성합니다.
     *
     * @param requestDto 도서 생성 요청 DTO
     * @param file       도서의 표지 이미지 파일
     */
    void createBook(BookCreateRequestDto requestDto, MultipartFile file);

    /**
     * 도서 설명에 사용될 이미지를 업로드하고 URL을 반환합니다.
     *
     * @param file 업로드할 이미지 파일
     * @return 업로드된 이미지의 URL
     */
    String uploadDescriptionImage(MultipartFile file);

    /**
     * 모든 도서를 페이징하여 조회합니다.
     *
     * @param pageable 페이징 정보
     * @return 도서 목록에 대한 페이지 DTO
     */
    PageDto<BookListResponseDto> findAllBooks(Pageable pageable);

    /**
     * bookId로 상품 상세 정보를 가져오는 메서드 입니다.
     *
     * @param bookId the book id
     * @return 상품 상세 정보 DTO
     */
    BookResponseDto findProductById(Long bookId);

    /**
     * 상품 ID 리스트로 상품 판매 정보를 가져오는 메서드 입니다.
     *
     * @param bookIds 상품 ID 리스트
     * @return 상품 판매 정보 DTO 리스트
     */
    List<BookExtractionResponseDto> getBookSaleList(List<Long> bookIds);

    /**
     * 지정된 ID의 도서 정보를 수정합니다.
     *
     * @param requestDto 수정할 도서 정보가 담긴 요청 DTO
     * @param bookId     도서 ID
     */
    void updateBook(BookModifyRequestDto requestDto, Long bookId);

    /**
     * 도서의 표지 이미지를 업데이트합니다.
     *
     * @param bookId 도서 ID
     * @param file   새 표지 이미지 파일
     */
    void updateBookThumbnail(Long bookId, MultipartFile file);
}
