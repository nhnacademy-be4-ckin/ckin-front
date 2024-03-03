package store.ckin.front.sale.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SalePolicyResponseDto;
import store.ckin.front.sale.facade.SaleFacade;

/**
 * 주문 Controller 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 25.
 */

@Controller
@RequestMapping("/sale")
@RequiredArgsConstructor
public class SaleController {


    private final SaleFacade saleFacade;

    @GetMapping
    public String getSaleForm(Model model) {

        SalePolicyResponseDto policyList = saleFacade.getPolicyList();
        List<BookExtractionResponseDto> bookSaleList = saleFacade.getBookSaleList(List.of(1L, 2L, 5L));


        model.addAttribute("policyList", policyList);
        model.addAttribute("bookSaleList", bookSaleList);
        return "sale/main";
    }


    @PostMapping
    public String createSale(@Valid SaleCreateRequestDto requestDto) {
        saleFacade.createSale(requestDto);

        // TODO : 주문 완료 페이지로 이동 처리 필요
        return "redirect:/";
    }

}