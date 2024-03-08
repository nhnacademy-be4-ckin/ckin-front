package store.ckin.front.category.adapter;

import java.util.List;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;

/**
 * CategoryAdapter.
 *
 * @author 나국로
 * @version 2024. 02. 15.
 */
public interface CategoryAdapter {


    void requestCreateCategory(CategoryCreateRequestDto categoryCreateRequestDto);

    List<CategoryResponseDto> requestGetTopCategories();


    List<CategoryResponseDto> requestGetSubcategories(Long parentId);

    void requestUpdateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto);


    void requestDeleteCategory(Long categoryId);


}
