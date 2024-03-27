package store.ckin.front.index.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public String indexView(@RequestParam(required = false) String isWelcome,
                            Model model) {
        System.out.println("isWelcome" + isWelcome);
        List<BookMainPageResponseDto> recentPublishBooks = productService.getRecentPublishBooks();
        List<BookMainPageResponseDto> bestBooks = productService.getBestBooks();
        List<BookMainPageResponseDto> recommendBooks = productService.getRecommendBooks();

        model.addAttribute("recentPublishBooks", recentPublishBooks);
        model.addAttribute("bestBooks", bestBooks);
        model.addAttribute("recommendBooks", recommendBooks);
        model.addAttribute("isWelcome", isWelcome);

        return "index";
    }


}
