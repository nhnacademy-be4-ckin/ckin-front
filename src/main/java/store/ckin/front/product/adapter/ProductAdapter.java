package store.ckin.front.product.adapter;

import java.util.List;
import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookMainPageResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;

/**
 * ProductAdapter
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
public interface ProductAdapter {

    /**
     * 카테고리 ID를 가지고 상품리스트를 페이지로 가져오는 메서드 입니다.
     *
     * @param categoryId the categoryId id
     * @return the subcategories
     */
    PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable);

    /**
     * bookId로 상품 상세 정보를 가져오는 메서드 입니다.
     *
     * @param bookId
     * @return 상품 상세 정보 DTO
     */
    BookResponseDto findProductById(Long bookId);

    /**
     * 신간 도서에 대한 정보를 가져옵니다.
     *
     * @param limit 최대로 가져올 도서의 개수
     * @return 도서 목록
     */
    List<BookMainPageResponseDto> findRecentBooks(Integer limit);

    /**
     * 인기 도서에 대한 정보를 가져옵니다.
     *
     * @param limit 최대로 가져올 도서의 개수
     * @return 도서 목록
     */
    List<BookMainPageResponseDto> getBestBooks(Integer limit);

    /**
     * 추천 도서에 대한 정보를 가져옵니다.
     *
     * @param limit 최대로 가져올 도서의 개수
     * @return 도서 목록
     */
    List<BookMainPageResponseDto> getRecommendBooks(Integer limit);

    /**
     * 최근 출판된 도서 목록을 가져옵니다.
     *
     * @return 최근 출판된 도서 페이지 목록
     */
    PageDto<BookResponseDto> getRecentPublishedBook(Pageable pageable);

    /**
     * 태그별로 보여줄 도서 목록을 가져오는 메소드 입니다.
     *
     * @param pageable 페이지 정보
     * @param tagName  태그 이름
     * @return 도서 페이지 DTO 반환
     */
    PageDto<BookResponseDto> getBookPageByTagName(Pageable pageable, String tagName);
}
