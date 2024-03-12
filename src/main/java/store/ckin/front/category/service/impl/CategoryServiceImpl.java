package store.ckin.front.category.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;

import java.util.List;

/**
 * CategoryService 구현 클래스.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 22.
 */
@Service
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
    public List<CategoryResponseDto> getTopCategories() {
        return categoryAdapter.requestGetTopCategories();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<CategoryResponseDto> getSubcategories(Long parentId) {
        return categoryAdapter.requestGetSubcategories(parentId);
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
