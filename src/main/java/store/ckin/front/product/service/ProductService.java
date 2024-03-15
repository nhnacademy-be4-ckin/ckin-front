package store.ckin.front.product.service;

import java.util.List;
import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.response.PageDto;
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
     * @param categoryId 부모 카테고리 아이디
     * @param pageable
     * @return
     */
    PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable);

    /**
     * bookId로 상품 상세 정보를 가져오는 메서드 입니다.
     *
     * @param bookId 도서 아이디
     * @return 상품 상세 정보 DTO
     */
    BookResponseDto findProductById(Long bookId);

    List<BookMainPageResponseDto> findRecentBooks(Integer limit);

    List<BookMainPageResponseDto> findRecentBooksByCategoryId(Long categoryId, Integer limit);
}
