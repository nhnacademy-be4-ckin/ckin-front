package store.ckin.front.category.service;

import java.util.List;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryCacheResponseDto;
import store.ckin.front.category.dto.response.CategoryNameResponseDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;

/**
 * CategoryService 인터페이스입니다.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 22.
 */
public interface CategoryService {

    /**
     * 새로운 카테고리를 생성합니다.
     *
     * @param categoryCreateRequestDto 카테고리 생성 요청 DTO
     */
    void createCategory(CategoryCreateRequestDto categoryCreateRequestDto);

    /**
     * 최상위 카테고리 목록을 조회합니다.
     *
     * @return 카테고리 응답 DTO 리스트
     */
    List<CategoryResponseDto> getTopCategories();

    /**
     * 특정 카테고리를 업데이트합니다.
     *
     * @param categoryId        카테고리 ID
     * @param categoryUpdateDto 카테고리 업데이트 요청 DTO
     */
    void updateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto);


    /**
     * 특정 카테고리를 삭제합니다.
     *
     * @param categoryId 카테고리 ID
     */
    void deleteCategory(Long categoryId);

    /**
     * 부모 아이디를 가지고 자식 카테고리를 찾는 메서드 입니다.
     *
     * @param parentId the parent id
     * @return the subcategories
     */
    List<CategoryResponseDto> getSubcategories(Long parentId);
    List<CategoryResponseDto> getSubcategoriesFromRedis(Long parentId);

    CategoryNameResponseDto getCategoryById(Long categoryId);
}
