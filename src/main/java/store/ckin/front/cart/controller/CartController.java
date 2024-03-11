package store.ckin.front.cart.controller;

import java.util.List;
import javax.servlet.http.Cookie;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.cart.dto.request.CartItemDeleteRequestDto;
import store.ckin.front.cart.dto.request.CartItemUpdateRequestDto;
import store.ckin.front.cart.service.CartService;

/**
 * 장바구니의 임시 저장을 담당하는 컨트롤러 클래스
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/cart")
public class CartController {
    private final CartService cartService;
    private static final String REDIRECT_CART_URL = "redirect:/cart";

    /**
     * 장바구니 페이지 접근시 Redis를 통하여 상품들을 불러오는 메서드
     *
     * @param cookie 현재 유저의 UUID(Cart_Id)
     * @param model  장바구니 상품들에 대한 데이터 넘겨주기 위한 parameter
     * @return index 페이지 리턴
     */
    @GetMapping
    public String getCartPage(@CookieValue(name = "CART_ID") Cookie cookie, Model model) {
        List<CartItem> currentUserCart = cartService.readCartItems(cookie.getValue());
        for (CartItem item : currentUserCart) {
            log.debug("saved in cart: name -> {}, id -> {}, quantity -> {}", item.getName(), item.getId(),
                    item.getQuantity());
        }
        model.addAttribute("CART_ITEMS", currentUserCart);
        return "cart/index";
    }

    /**
     * 장바구니에 상품을 추가하는 메서드
     *
     * @param cookie   현재 유저의 UUID (Cart_Id)
     * @param cartItem 장바구니에 추가할 아이템
     * @return 장바구니 페이지 리다이렉트 URL
     */
    @PostMapping("/create")
    public String addCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute CartItem cartItem) {
        log.debug("add Item -> {}", cartItem.getId());
        cartService.createCartItem(cookie.getValue(), cartItem);
        return REDIRECT_CART_URL;
    }

    /**
     * 장바구니 상품의 수량을 변경하기 위한 메서드
     *
     * @param cookie                   현재 유저의 UUID
     * @param cartItemUpdateRequestDto 상품 아이디와 상품 개수를 담은 Dto
     * @return 장바구니 페이지로 리다이렉트
     */
    @PostMapping("/update")
    public String updateCartItem(@CookieValue(name = "CART_ID") Cookie cookie,
                                 @ModelAttribute CartItemUpdateRequestDto cartItemUpdateRequestDto) {
        log.debug("updateCartItem(): request(id: {}, quantity: {})", cartItemUpdateRequestDto.getId(),
                cartItemUpdateRequestDto.getQuantity());
        cartService.updateItemQuantity(cookie.getValue(), cartItemUpdateRequestDto);
        return REDIRECT_CART_URL;
    }

    /**
     * 장바구니 상품을 삭제하기 위한 메서드
     *
     * @param cookie                   현재 유저의 UUID
     * @param cartItemDeleteRequestDto 상품 아이디를 담은 Dto
     * @return 장바구니 페이지로 리다이렉트
     */
    @PostMapping("/delete")
    public String deleteCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute
    CartItemDeleteRequestDto cartItemDeleteRequestDto) {
        log.debug("deleteCartItem(): request(id: {})", cartItemDeleteRequestDto.getId());
        cartService.deleteCartItem(cookie.getValue(), cartItemDeleteRequestDto);
        return REDIRECT_CART_URL;
    }

    /**
     * 장바구니 상품을 주문하기 위한 메서드
     *
     * @param cookie             현재 유저의 UUID
     * @param redirectAttributes 상품들의 리스트를 결제 페이지로 넘겨주기 위한 RedirectAttributes
     * @return 결제 페이지로 리다이렉트
     */
    @GetMapping("/order")
    public String placeOrder(@CookieValue(name = "CART_ID") Cookie cookie, RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("PLACE_ITEMS", cartService.readCartItems(cookie.getValue()));
        // 주문시 카트 비워지는 로직 추가
        return "redirect:/sale";
    }
}