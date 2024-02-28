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
 * description
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

    @GetMapping
    public String getCartPage(@CookieValue(name = "CART_ID") Cookie cookie, Model model) {
        List<CartItem> currentUserCart = cartService.readCartItems(cookie.getValue());
        for(CartItem item: currentUserCart) {
            log.info("saved in cart -> {}", item.getName());
        }
        model.addAttribute(currentUserCart);
        return "cart/index";
    }
    @GetMapping("/create")
    public String addCartItemTest(@CookieValue(name = "CART_ID") Cookie cookie){
//        cartService.createCartItem(cookie.getValue(), new CartItem("name", 1L, 10, 10000));
        return "redirect:/cart";
    }

    @PostMapping("/create")
    public String addCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute CartItem cartItem){
        cartService.createCartItem(cookie.getValue(), cartItem);
        return "redirect:/cart";
    }

    @PostMapping("/update")
    public String updateCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute CartItemUpdateRequestDto cartItemUpdateRequestDto) {
        return "redirect:/cart";
    }

    @PostMapping("/delete")
    public String deleteCartItem(@CookieValue(name = "CART_ID") Cookie cookie, @ModelAttribute
    CartItemDeleteRequestDto cartItemDeleteRequestDto) {
        return "redirect:/cart";
    }

    @GetMapping("/order")
    public String placeOrder(RedirectAttributes redirectAttributes) {
        // post시 list 받을 수 있나?
//        redirectAttributes.addFlashAttribute()

        return "redirect:/sale";
    }
}