package store.ckin.front.product.controller;

import java.util.List;
import java.util.stream.Collectors;
import javax.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.domain.SearchProduct;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;
import store.ckin.front.product.service.ProductService;
import store.ckin.front.review.dto.response.ReviewDto;
import store.ckin.front.review.service.ReviewService;

/**
 * description:
 *
 * @author : gaeun
 * @version 2024. 03. 07.
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final CategoryService categoryService;
    private final ReviewService reviewService;

    @GetMapping("/{categoryId}")
    public String getProductPage(@PageableDefault(page = 0, size = 12) Pageable pageable,
                                 @PathVariable("categoryId") Long categoryId,
                                 @RequestParam(value = "categoryName", required = false) String categoryName,
                                 Model model) {

        PageDto<BookListResponseDto> bookPageDto = productService.findByCategoryId(categoryId, pageable);
        List<CategoryResponseDto> categoryList = categoryService.getSubcategories(categoryId);
        //TODO: categoryId로 단일 조회

        model.addAttribute("pagination", bookPageDto);
        model.addAttribute("categoryList", categoryList);
        model.addAttribute("categoryId", categoryId);
        model.addAttribute("categoryName", categoryName);

        return "category/initial";
    }

    /**
     * bookId로 상품 상세 정보 페이지를 보여주는 메서드 입니다.
     *
     * @param bookId
     * @return 상품 상세 정보 DTO
     */
    @GetMapping("/view/{bookId}")
    public String getProductById(@PathVariable("bookId") Long bookId,
                                 @PageableDefault(page = 0, size = 5) Pageable pageable,
                                 Model model) {
        BookResponseDto bookResponseDto = productService.findProductById(bookId);
        PageDto<ReviewDto> reviewListDtoPageDto = reviewService.getReviewListByBookId(pageable, bookId);
        String authorNames = bookResponseDto.getAuthorNames()
                .stream().collect(Collectors.joining(", "));
        String reviewRate = bookResponseDto.getBookReviewRate();
        String formattedRate = "0".equals(reviewRate) ? "0" :
                String.format("%.1f", Double.parseDouble(reviewRate) / reviewListDtoPageDto.getTotalElements());

        model.addAttribute("book", bookResponseDto);
        model.addAttribute("authorNames", authorNames);
        model.addAttribute("totalRate", formattedRate);
        model.addAttribute("pagination", reviewListDtoPageDto);
        return "product/view";
    }

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
    @GetMapping("/search")
    public String searchProduct(@RequestParam("keyword") @DefaultValue("") String keyword,
                                @Positive @RequestParam(defaultValue = "1") int page,
                                @Positive @RequestParam(required = false, defaultValue = "10") int size, Model model) {

        List<SearchProduct> searchResults = productService.findResultByKeyword(keyword, PageRequest.of(page - 1, size));

        model.addAttribute("KEY_WORD", keyword);
        for (SearchProduct book : searchResults) {
            log.debug("book info: {}", book);
        }
        model.addAttribute("SEARCH_RESULT", searchResults);

        return "product/search";
    }
}
