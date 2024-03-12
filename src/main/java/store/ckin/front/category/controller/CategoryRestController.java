package store.ckin.front.category.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;

/**
 * CategoryRestController 클래스.
 *
 * @author 나국로
 * @version 2024. 03. 06.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/categories")
public class CategoryRestController {

    private final CategoryService categoryService;


    /**
     * 새로운 카테고리를 생성합니다.
     *
     * @param categoryCreateRequestDto 카테고리 생성 요청 DTO
     */
    @PostMapping("/admin")
    public void createCategory(@RequestBody CategoryCreateRequestDto categoryCreateRequestDto) {
        categoryService.createCategory(categoryCreateRequestDto);
    }


    /**
     * 최상위 카테고리 목록을 조회합니다.
     *
     * @return 최상위 카테고리 목록
     */
    @GetMapping("/topCategories")
    public List<CategoryResponseDto> getTopCategories() {
        return categoryService.getTopCategories();
    }

    /**
     * 지정된 ID의 카테고리를 업데이트합니다.
     *
     * @param requestDto 업데이트할 카테고리의 정보가 담긴 DTO
     * @param categoryId 카테고리 ID
     */
    @PutMapping("/admin/{categoryId}")
    public void updateCategory(@RequestBody CategoryUpdateRequestDto requestDto, @PathVariable Long categoryId) {
        categoryService.updateCategory(categoryId, requestDto);
    }



    /**
     * 지정된 부모 ID에 해당하는 하위 카테고리 목록을 조회합니다.
     *
     * @param parentId 부모 카테고리 ID
     * @return 하위 카테고리 목록
     */
    @GetMapping("/{parentId}")
    public List<CategoryResponseDto> getSubcategories(@PathVariable("parentId") Long parentId) {
        return categoryService.getSubcategories(parentId);
    }
}
