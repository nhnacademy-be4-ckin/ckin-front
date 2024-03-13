package store.ckin.front.product.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;
import store.ckin.front.product.service.ProductService;
import store.ckin.front.review.dto.response.ReviewDto;
import store.ckin.front.review.service.ReviewService;

import java.util.List;
import java.util.stream.Collectors;

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
                                 Model model) {

        PageDto<BookListResponseDto> bookPageDto = productService.findByCategoryId(categoryId, pageable);
        List<CategoryResponseDto> categoryList = categoryService.getSubcategories(categoryId);
        String categoryName = "국내도서";
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

        model.addAttribute("book", bookResponseDto);
        model.addAttribute("authorNames", authorNames);
        model.addAttribute("totalRate",
                 "0".equals(bookResponseDto.getBookReviewRate())? 0 : String.format("%.2f", Double.parseDouble(bookResponseDto.getBookReviewRate()) / reviewListDtoPageDto.getTotalElements()));
        model.addAttribute("pagination", reviewListDtoPageDto);
        return "product/view";
    }
}
