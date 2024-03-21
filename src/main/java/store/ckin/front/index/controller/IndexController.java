package store.ckin.front.index.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import store.ckin.front.product.dto.response.BookMainPageResponseDto;
import store.ckin.front.product.service.ProductService;

/**
 * 인덱스 페이지 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 25.
 */

@Controller
@RequiredArgsConstructor
public class IndexController {
    private final ProductService productService;

    @GetMapping("/")
    public String indexView(Model model) {
        List<BookMainPageResponseDto> koreanBookList = productService.findRecentBooksByCategoryId(1L, 4);
        List<BookMainPageResponseDto> foreignBookList = productService.findRecentBooksByCategoryId(2L, 4);
        List<BookMainPageResponseDto> newBookList = productService.findRecentBooks(4);

        productService.findRecentBooks(8);

        model.addAttribute("koreanBookList", koreanBookList);
        model.addAttribute("foreignBookList", foreignBookList);
        model.addAttribute("newBookList", newBookList);

        return "index";
    }
}
