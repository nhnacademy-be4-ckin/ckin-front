package store.ckin.front.sale.controller;

import java.util.List;
import java.util.Objects;
import javax.servlet.http.Cookie;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.member.domain.response.MemberPointResponseDto;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SalePolicyResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.facade.SaleFacade;

/**
 * 주문 Controller 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 25.
 */

@Slf4j
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
        List<BookExtractionResponseDto> bookSaleList = saleFacade.getBookSaleList(Objects.requireNonNull(cartItems));

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        log.debug("authentication = {}", authentication.getName());
        if (authentication.isAuthenticated() && !authentication.getName().equals("anonymousUser")) {
            MemberPointResponseDto memberPoint = saleFacade.getMemberPoint(authentication.getName());
            log.info("memberPoint = {}", memberPoint.getPoint());
            model.addAttribute("memberPoint", memberPoint.getPoint());
        }

        model.addAttribute("policyList", policyList);
        model.addAttribute("bookSaleList", bookSaleList);
        return "sale/main";
    }


    /**
     * 주문을 등록하는 메서드입니다.
     *
     * @param requestDto 주문 등록 요청 정보
     * @return 주문 완료 페이지로 이동
     */
    @PostMapping
    public String createSale(@CookieValue("CART_ID") Cookie cookie, @Valid SaleCreateRequestDto requestDto) {

        log.info("SaleCreateRequestDto: {}", requestDto);

        Long saleId = saleFacade.createSale(requestDto);
        saleFacade.deleteCartItemAll(cookie.getValue());
        return "redirect:/sale/" + saleId;
    }

    /**
     * 주문 정보를 조회하는 메서드입니다.
     *
     * @param saleId 주문 ID
     * @param model  Model 객체
     * @return 주문 완료 페이지
     */
    @GetMapping("/{saleId}")
    public String getSaleInformation(@PathVariable Long saleId, Model model) {

        SaleResponseDto saleResponseDto = saleFacade.getSaleInformation(saleId);

        log.info("SaleInformation = {}", saleResponseDto);
        model.addAttribute("saleId", saleResponseDto);
        return "sale/success";
    }
}