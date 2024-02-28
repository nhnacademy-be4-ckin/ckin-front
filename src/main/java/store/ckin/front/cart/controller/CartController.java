package store.ckin.front.cart.controller;

import java.util.List;
import javax.servlet.http.Cookie;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import store.ckin.front.cart.dto.CartItemDto;
import store.ckin.front.util.RedisUtils;

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
    private final RedisUtils redisUtils;
    @GetMapping
    public String getCartPage(@CookieValue(name = "CART_ID") Cookie cookie, Model model) {
        log.info("getCartPage(): cookie -> {}", cookie.getValue());
        List<CartItemDto> cart = redisUtils.getCartItems(cookie.getValue());
        for(CartItemDto cartItem: cart) {
            log.info("getCartPage(): cartItem -> {}", cartItem.getName());
        }
        model.addAttribute(cart);
        return "cart/index";
    }

    @GetMapping("/create")
    public String addCartItem(@CookieValue(name = "CART_ID") Cookie cookie) {
        log.info("addCartPage(): cookie -> {}", cookie.getValue());
        redisUtils.addCartItem(cookie.getValue(), new CartItemDto("test", 1L, 1, 10000));
        List<CartItemDto> cart = redisUtils.getCartItems(cookie.getValue());
        for(CartItemDto cartItem: cart) {
            log.info("getCartPage(): cartItem -> {}", cartItem.getName());
        }
        return "redirect:/cart";
    }

    @GetMapping("/order")
    public String proceedOrder(RedirectAttributes redirectAttributes) {
        redirectAttributes.addFlashAttribute(List<>)

        return "redirect:/sale";
    }
}