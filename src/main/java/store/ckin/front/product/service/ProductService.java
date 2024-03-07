package store.ckin.front.product.service;

import org.springframework.data.domain.Pageable;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.dto.response.BookListResponseDto;

import java.util.List;

/**
 * CouponPolicyService
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */
public interface ProductService {

    /**
     * 부모 아이디를 가지고 자식 카테고리를 찾는 메서드 입니다.
     *
     * @param parentId the parent id
     * @return the subcategories
     */
    PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable);
}
