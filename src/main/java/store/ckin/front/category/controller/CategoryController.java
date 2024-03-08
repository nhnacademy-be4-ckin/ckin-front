package store.ckin.front.category.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.category.service.CategoryService;

/**
 * CategoryController.
 *
 * @author 나국로
 * @version 2024. 02. 22.
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/categories")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public String showCategoryIndex() {
        return "admin/category/index";
    }

}
