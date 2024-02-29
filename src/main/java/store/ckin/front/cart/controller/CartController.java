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

    @GetMapping
    public String getCartPage(@CookieValue(name = "CART_ID") Cookie cookie, Model model) {
        List<CartItem> currentUserCart = cartService.readCartItems(cookie.getValue());
        for(CartItem item: currentUserCart) {
            log.info("saved in cart -> {}", item.getName());
        }
        model.addAttribute("CART_ITEMS", currentUserCart);
        return "cart/index";
    }

    @PostMapping("/create")
    public String addCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute CartItem cartItem){
        cartService.createCartItem(cookie.getValue(), cartItem);
        return REDIRECT_CART_URL;
    }

    @PostMapping("/update")
    public String updateCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute CartItemUpdateRequestDto cartItemUpdateRequestDto) {
        cartService.updateItemQuantity(cookie.getValue(), cartItemUpdateRequestDto);
        return REDIRECT_CART_URL;
    }

    @PostMapping("/delete")
    public String deleteCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute
    CartItemDeleteRequestDto cartItemDeleteRequestDto) {
        cartService.deleteCartItem(cookie.getValue(), cartItemDeleteRequestDto);
        return REDIRECT_CART_URL;
    }

    @GetMapping("/order")
    public String placeOrder(@CookieValue(name = "CART_ID") Cookie cookie, RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute("PLACE_ITEMS", cartService.readCartItems(cookie.getValue()));
        return "redirect:/sale";
    }
}