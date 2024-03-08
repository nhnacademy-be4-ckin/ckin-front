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


    @PostMapping("/admin")
    public void createCategory(@RequestBody CategoryCreateRequestDto categoryCreateRequestDto) {
        categoryService.createCategory(categoryCreateRequestDto);
    }

    @GetMapping("/subcategories/{parentId}")
    public List<CategoryResponseDto> getSubcategories(@PathVariable Long parentId) {
        return categoryService.getSubcategories(parentId);
    }

    @GetMapping("/topCategories")
    public List<CategoryResponseDto> getTopCategories() {
        return categoryService.getTopCategories();
    }

    @PutMapping("/admin/{categoryId}")
    public void updateCategory(@RequestBody CategoryUpdateRequestDto requestDto, @PathVariable Long categoryId) {
        categoryService.updateCategory(categoryId, requestDto);
    }

    @GetMapping("/{parentId}")
    public List<CategoryResponseDto> getCouponPage(@PathVariable("parentId") Long parentId) {

        List<CategoryResponseDto> categoryList = categoryService.getSubcategories(parentId);

        return categoryList;
    }
}
