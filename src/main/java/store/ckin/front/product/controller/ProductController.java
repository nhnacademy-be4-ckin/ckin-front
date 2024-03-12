package store.ckin.front.product.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
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

/**
 * description:
 *
 * @author : gaeun
 * @version 2024. 03. 07.
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final CategoryService categoryService;

    @GetMapping("/{categoryId}")
    public String getCouponPage(@PageableDefault(page = 0, size = 12) Pageable pageable,
                                @PathVariable("categoryId") Long categoryId,
                                Model model) {

        PageDto<BookListResponseDto> bookPageDto = productService.findByCategoryId(categoryId, pageable);
        List<CategoryResponseDto> categoryList = categoryService.getSubcategories(categoryId);
        String categoryName = "국내도서";
        //TODO: categoryId로 단일 조회

        model.addAttribute("categoryList", categoryList);
        model.addAttribute("categoryId", categoryId);
        model.addAttribute("categoryName", categoryName);
        model.addAttribute("bookList", bookPageDto.getContent());
        model.addAttribute("isPrevious", bookPageDto.getNumber() > 0);
        model.addAttribute("isNext", bookPageDto.getNumber() < bookPageDto.getTotalPages() - 1);
        model.addAttribute("totalPages", bookPageDto.getTotalPages() == 0 ? 1 : bookPageDto.getTotalPages());
        model.addAttribute("currentPage", bookPageDto.getNumber());

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
                                 Model model) {
        BookResponseDto bookResponseDto = productService.findProductById(bookId);
//        PageDto<ReviewDto> reviewListDtoPageDto = productService.getReviewListByBookId(bookId);
        String authorNames = "";
        for (String author : bookResponseDto.getAuthorNames()) {
            authorNames += author;
            authorNames += " ";
        }
        model.addAttribute("book", bookResponseDto);
        model.addAttribute("authorNames", authorNames);
//        model.addAttribute("isPrevious", bookPageDto.getNumber() > 0);
//        model.addAttribute("isNext", bookPageDto.getNumber() < bookPageDto.getTotalPages() - 1);
//        model.addAttribute("totalPages", bookPageDto.getTotalPages() == 0 ? 1 : bookPageDto.getTotalPages());
//        model.addAttribute("currentPage", bookPageDto.getNumber());
        return "product/view";
    }

}
