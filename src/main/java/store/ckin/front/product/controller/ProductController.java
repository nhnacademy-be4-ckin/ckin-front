package store.ckin.front.product.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.dto.response.BookListResponseDto;
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

    @GetMapping("/{categoryId}")
    public String getCouponPage(@PageableDefault(page = 0, size = 12) Pageable pageable,
                                @PathVariable("categoryId") Long categoryId,
                                Model model) {

        PageDto<BookListResponseDto> bookPageDto = productService.findByCategoryId(categoryId, pageable);

        model.addAttribute("categoryId", categoryId);
        model.addAttribute("bookList", bookPageDto.getContent());
        model.addAttribute("isPrevious", bookPageDto.getNumber() > 0);
        model.addAttribute("isNext", bookPageDto.getNumber() < bookPageDto.getTotalPages() - 1);
        model.addAttribute("totalPages", bookPageDto.getTotalPages() == 0 ? 1 : bookPageDto.getTotalPages());
        model.addAttribute("currentPage", bookPageDto.getNumber());

        return "category/initial";
    }
}
