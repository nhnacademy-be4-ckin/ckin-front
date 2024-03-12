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

    /**
     * 카테고리 인덱스 페이지를 반홥니다
     *
     * @return 카테고리 인덱스 페이지
     */
    @GetMapping
    public String showCategoryIndex() {
        return "admin/category/index";
    }

}
