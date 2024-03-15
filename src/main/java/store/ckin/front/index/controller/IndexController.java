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
        List<BookMainPageResponseDto> 국내도서리스트 = productService.findRecentBooksByCategoryId(1L, 10);
        List<BookMainPageResponseDto> 외국도서리스트 = productService.findRecentBooksByCategoryId(2L, 10);
        List<BookMainPageResponseDto> 신간도서리스트 = productService.findRecentBooks(10);

        productService.findRecentBooks(10);

        model.addAttribute("국내도서리스트", 국내도서리스트);
        model.addAttribute("외국도서리스트", 외국도서리스트);
        model.addAttribute("신간도서리스트", 신간도서리스트);

        return "index";
    }
}
