package store.ckin.front.product.service;

import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.domain.SearchProduct;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookMainPageResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;

/**
 * CouponPolicyService
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
public interface ProductService {

    /**
     * 부모 카테고리의 하위에 속하는 도서 목록을 가져오는 메소드 입니다.
     *
     * @param categoryId 부모 카테고리 아이디
     * @param pageable 페이지 정보
     * @return 도서 목록 DTO
     */
    PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable);

    /**
     * 도서 아이디로 상품 상세 정보를 가져오는 메서드 입니다.
     *
     * @param bookId 도서 아이디
     * @return 상품 상세 정보 DTO
     */
    BookResponseDto findProductById(Long bookId);

    /**
     * 최근 출판된 도서 목록을 가져옵니다.
     *
     * @return 최근 출판된 도서 목록
     */
    List<BookMainPageResponseDto> getRecentPublishBooks();

    /**
     * 최근 출판된 도서 목록을 가져옵니다.
     *
     * @return 최근 출판된 도서 페이지 목록
     */
    PageDto<BookResponseDto> getRecentPublishBooks(Pageable pageable);

    /**
     * 해당 키워드를 가진 연관 도서들을 가져오는 메서드.
     *
     * @param keyword     검색할 키워드
     * @param pageRequest 페이지 요청
     * @return 연관된 도서 목록
     * @author 김준현
     */
    PagedResponse<List<SearchProduct>> findResultByKeyword(String keyword, PageRequest pageRequest, String filter, String selectedCategory);

    /**
     * 관리자가 지정한 인기 도서를 가져옵니다.
     *
     * @return 인기 도서 목록
     */
    List<BookMainPageResponseDto> getBestBooks();

    /**
     * 관리자가 지정한 추천 도서를 가져옵니다.
     *
     * @return 추천 도서 목록
     */
    List<BookMainPageResponseDto> getRecommendBooks();

    /**
     * 태그별로 보여줄 도서 목록을 가져오는 메소드 입니다.
     *
     * @param pageable 페이지 정보
     * @param tagName  태그 이름
     * @return 도서 페이지 DTO 반환
     */
    PageDto<BookResponseDto> getBookPageByTagName(Pageable pageable, String tagName);
}
