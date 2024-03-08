package store.ckin.front.category.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 26
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
public class CategoryRestController {

    private final CategoryService categoryService;

    @GetMapping("/{parentId}")
    public List<CategoryResponseDto> getCouponPage(@PathVariable("parentId") Long parentId) {

        List<CategoryResponseDto> categoryList = categoryService.getSubcategories(parentId);

        return categoryList;
    }
}
