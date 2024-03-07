package store.ckin.front.product.adapter;

import org.springframework.data.domain.Pageable;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;

import java.util.List;

/**
 * ProductAdapter
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
public interface ProductAdapter {

    /**
     * 부모 아이디를 가지고 자식 카테고리를 찾는 메서드 입니다.
     *
     * @param parentId the parent id
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
}
