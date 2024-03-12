package store.ckin.front.category.adapter;

import java.util.List;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;

/**
 * CategoryAdapter.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 15.
 */
public interface CategoryAdapter {


    void requestCreateCategory(CategoryCreateRequestDto categoryCreateRequestDto);

    List<CategoryResponseDto> requestGetTopCategories();


    /**
     * 부모 아이디를 가지고 자식 카테고리를 찾는 메서드 입니다.
     *
     * @param parentId the parent id
     * @return the subcategories
     */
    List<CategoryResponseDto> requestGetSubcategories(Long parentId);

    void requestUpdateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto);


    void requestDeleteCategory(Long categoryId);



}
