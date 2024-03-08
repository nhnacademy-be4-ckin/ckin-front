package store.ckin.front.category.service;

import java.util.List;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;

/**
 * {class name}.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 22.
 */
public interface CategoryService {

    void createCategory(CategoryCreateRequestDto categoryCreateRequestDto);

    List<CategoryResponseDto> getTopCategories();

    void updateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto);


    void deleteCategory(Long categoryId);

    /**
     * 부모 아이디를 가지고 자식 카테고리를 찾는 메서드 입니다.
     *
     * @param parentId the parent id
     * @return the subcategories
     */
    List<CategoryResponseDto> getSubcategories(Long parentId);
}
