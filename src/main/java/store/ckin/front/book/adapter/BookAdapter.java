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
    /**
     * 도서 설명에 사용될 이미지를 업로드하고 그 URL을 반환합니다.
     *
     * @param file 업로드할 이미지 파일
     * @return 업로드된 이미지 URL
     */
    String requestUploadDescriptionImage(MultipartFile file);

    /**
     * 새로운 도서를 생성합니다.
     *
     * @param bookCreateRequestDto 도서 생성 요청 DTO
     * @param file 도서 표지 이미지 파일
     */
    void requestCreateBook(BookCreateRequestDto bookCreateRequestDto, MultipartFile file);

    /**
     * 모든 도서를 페이징하여 조회합니다.
     *
     * @param pageable 페이징 정보
     * @return 도서 목록에 대한 페이지 DTO
     */
    PageDto<BookListResponseDto> findAllBooks(Pageable pageable);

    /**
     * 특정 ID의 도서 정보를 조회합니다.
     *
     * @param bookId 도서 ID
     * @return 도서 정보에 대한 응답 DTO
     */
    BookResponseDto findProductById(Long bookId);

    /**
     * 도서 판매 목록을 조회합니다.
     *
     * @param request 조회 요청 ID 목록
     * @return 도서 추출 응답 DTO 목록
     */
    List<BookExtractionResponseDto> requestBookSaleList(List<Long> request);


    /**
     * 특정 ID의 도서 정보를 수정합니다.
     *
     * @param bookModifyRequestDto 도서 수정 요청 DTO
     * @param bookId 도서 ID
     */
    void requestUpdateBook(BookModifyRequestDto bookModifyRequestDto, Long bookId);

    /**
     * 도서의 표지 이미지를 업데이트합니다.
     *
     * @param bookId 도서 ID
     * @param file 새 표지 이미지 파일
     */
    void requestUpdateBookThumbnail(Long bookId, MultipartFile file);
}
