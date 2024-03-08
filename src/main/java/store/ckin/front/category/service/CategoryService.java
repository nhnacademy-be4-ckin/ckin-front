package store.ckin.front.category.service;

import store.ckin.front.category.dto.response.CategoryResponseDto;

import java.util.List;

/**
 * CouponPolicyService
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
public interface CategoryService {

    /**
     * 부모 아이디를 가지고 자식 카테고리를 찾는 메서드 입니다.
     *
     * @param parentId the parent id
     * @return the subcategories
     */
    List<CategoryResponseDto> getSubcategories(Long parentId);
}
