package store.ckin.front.sale.controller;

import java.util.List;
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
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.member.domain.response.MemberPointResponseDto;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
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
    public String getSaleForm(@CookieValue(name = "CART_ID") Cookie cookie, Model model) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated() && !authentication.getName().equals("anonymousUser")) {
            MemberPointResponseDto memberPoint = saleFacade.getMemberPoint(authentication.getName());
            model.addAttribute("memberPoint", memberPoint.getPoint());
        }

        List<CartItem> cartItems = saleFacade.readCartItems(cookie.getValue());

        if (cartItems.isEmpty()) {
            return "redirect:/cart";
        }

        model.addAttribute("policyList", saleFacade.getPolicyList());
        model.addAttribute("bookSaleList", saleFacade.getBookSaleList(cartItems));
        return "sale/main";
    }


    /**
     * 주문을 등록하는 메서드입니다.
     *
     * @param requestDto 주문 등록 요청 정보
     * @return 주문 완료 페이지로 이동
     */
    @PostMapping
    public String createSale(@CookieValue("CART_ID") Cookie cookie,
                             @Valid SaleCreateRequestDto requestDto) {

        log.debug("requestDto = {}", requestDto);

        String saleNumber = saleFacade.createSale(requestDto);
        saleFacade.deleteCartItemAll(cookie.getValue());

        return "redirect:/sale/success/" + saleNumber;
    }

    /**
     * 주문 정보를 조회하는 메서드입니다.
     *
     * @param model 주문 정보가 담은 Model 객체
     * @return 주문 완료 페이지
     */
    @GetMapping("/success/{saleNumber}")
    public String getSaleInformation(@PathVariable String saleNumber,
                                     Model model) {

        model.addAttribute("sale", saleFacade.getSaleWithBooks(saleNumber));
        return "sale/success";
    }
}