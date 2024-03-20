package store.ckin.front.category.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryNameResponseDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;

/**
 * CategoryService 구현 클래스.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 22.
 */
@Service
@Transactional
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryAdapter categoryAdapter;

    /**
     * {@inheritDoc}
     */
    @Override
    public void createCategory(CategoryCreateRequestDto categoryCreateRequestDto) {
        categoryAdapter.requestCreateCategory(categoryCreateRequestDto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = true)
    public List<CategoryResponseDto> getTopCategories() {
        return categoryAdapter.requestGetTopCategories();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @Transactional(readOnly = true)
    public List<CategoryResponseDto> getSubcategories(Long parentId) {
        return categoryAdapter.requestGetSubcategories(parentId);
    }

    @Override
    @Transactional(readOnly = true)
    public CategoryNameResponseDto getCategoryById(Long categoryId) {
        return new CategoryNameResponseDto(categoryAdapter.getCategoryName(categoryId));
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void updateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto) {
        categoryAdapter.requestUpdateCategory(categoryId, categoryUpdateDto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void deleteCategory(Long categoryId) {
        categoryAdapter.requestDeleteCategory(categoryId);
    }


}
