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


    /**
     * 새로운 카테고리를 생성합니다.
     *
     * @param categoryCreateRequestDto 카테고리 생성 요청 DTO
     */
    void requestCreateCategory(CategoryCreateRequestDto categoryCreateRequestDto);

    /**
     * 최상위 카테고리 목록을 조회합니다.
     *
     * @return 카테고리 응답 DTO 리스트
     */
    List<CategoryResponseDto> requestGetTopCategories();


    /**
     * 주어진 부모 ID에 해당하는 하위 카테고리 목록을 조회합니다.
     *
     * @param parentId 부모 카테고리 ID
     * @return 카테고리 응답 DTO 리스트
     */
    List<CategoryResponseDto> requestGetSubcategories(Long parentId);

    /**
     * 특정 카테고리를 업데이트합니다.
     *
     * @param categoryId        카테고리 ID
     * @param categoryUpdateDto 카테고리 업데이트 요청 DTO
     */
    void requestUpdateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto);


    /**
     * 특정 카테고리를 삭제합니다.
     *
     * @param categoryId 카테고리 ID
     */
    void requestDeleteCategory(Long categoryId);

    /**
     * 해당 카테고리의 이름을 가져옵니다.
     *
     * @param bookId
     * @return
     */
    String getCategoryName(Long bookId);

}
