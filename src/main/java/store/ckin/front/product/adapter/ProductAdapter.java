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
    List<BookMainPageResponseDto> findRecentBooks(Integer limit);

    List<BookMainPageResponseDto> findRecentBooksByCategoryId(Long categoryId, Integer limit);
}
