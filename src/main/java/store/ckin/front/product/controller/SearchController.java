package store.ckin.front.product.controller;

import java.util.List;
import javax.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.product.domain.SearchProduct;
import store.ckin.front.product.service.ProductService;

/**
 * 사용자로부터 검색 요청을 받고, 해당 검색 결과를 응답하는 컨트롤러 클래스
 *
 * @author 김준현
 * @version 2024. 03. 25
 */
@Slf4j
@Controller
@RequestMapping("/search")
@RequiredArgsConstructor
public class SearchController {
    private final ProductService productService;
    private static final String SEARCH_FILTER_ALL = "title,author,publisher,description";


    /**
     * 해당 키워드로 연관된 상품들을 가져오는 메서드
     *
     * @param keyword 검색할 키워드
     * @param page    페이징 처리할 페이지
     * @param size    페이징 처리할 페이지 사이자
     * @param model   View 로 넘겨주기 위한 모델
     * @return 검색 페이지
     * @author 김준현
     */
    @GetMapping
    public String searchProduct(@RequestParam(value = "keyword", required = false, defaultValue = "") String keyword,
                                @Positive @RequestParam(defaultValue = "1") int page,
                                @Positive @RequestParam(required = false, defaultValue = "10") int size,
                                @RequestParam(value = "filter", required = false, defaultValue = "") String filter,
                                @RequestParam(value = "category", required = false, defaultValue = "") String category,
                                Model model) {

        log.debug("searchBy : {}, category: {}", filter, category);
        if (filter.isBlank()) {
            filter = SEARCH_FILTER_ALL;
        }

        PagedResponse<List<SearchProduct>>
                searchResults =
                productService.findResultByKeyword(keyword, PageRequest.of(page - 1, size), filter, category);

        model.addAttribute("KEY_WORD", keyword);
        for (SearchProduct book : searchResults.getData()) {
            log.debug("book info: {}", book);
        }
        model.addAttribute("SEARCH_RESULT", searchResults.getData());
        model.addAttribute("RESULT_PAGE_INFO", searchResults.getPageInfo());
        return "product/search";
    }
}
