package store.ckin.front.category.service;

import java.util.List;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;

/**
 * {class name}.
 *
 * @author 나국로
 * @version 2024. 02. 22.
 */
public interface CategoryService {

    void createCategory(CategoryCreateRequestDto categoryCreateRequestDto);

    List<CategoryResponseDto> getTopCategories();


    List<CategoryResponseDto> getSubcategories(Long parentId);

    void updateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto);


    void deleteCategory(Long categoryId);

}
