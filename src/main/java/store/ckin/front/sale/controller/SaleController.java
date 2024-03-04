package store.ckin.front.sale.controller;

import java.util.List;
import java.util.Objects;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.cart.dto.domain.CartItem;
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

    /**
     * 주문 등록 페이지를 요청하는 메서드입니다.
     *
     * @param model Model 객체 (주문 등록에 사용될 정책, 책 목록 정보)
     * @return 주문 등록 페이지
     */
    @GetMapping
    public String getSaleForm(Model model) {

        SalePolicyResponseDto policyList = saleFacade.getPolicyList();

        List<CartItem> cartItems = (List<CartItem>) model.getAttribute("PLACE_ITEMS");

        List<BookExtractionResponseDto> bookSaleList =
                saleFacade.getBookSaleList(Objects.requireNonNull(cartItems));

        model.addAttribute("policyList", policyList);
        model.addAttribute("bookSaleList", bookSaleList);
        return "sale/main";
    }


    /**
     * 주문을 등록하는 메서드입니다.
     *
     * @param requestDto         주문 등록 요청 정보
     * @param redirectAttributes 주문 등록 성공 시, 주문 번호를 전달하기 위한 RedirectAttributes 객체
     * @return 주문 완료 페이지로 이동
     */
    @PostMapping
    public String createSale(@Valid SaleCreateRequestDto requestDto,
                             RedirectAttributes redirectAttributes) {
        Long saleId = saleFacade.createSale(requestDto);

        redirectAttributes.addFlashAttribute("saleId", saleId);

        // todo: 주문 완료 페이지 생성 후 REDIRECT URL 변경 필요!!
        return "redirect:/";
    }

}