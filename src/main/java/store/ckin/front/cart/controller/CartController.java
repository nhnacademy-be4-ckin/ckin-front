package store.ckin.front.cart.controller;

import java.util.Objects;
import java.util.UUID;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
@Slf4j
@Controller
@RequestMapping("/cart")
public class CartController {
    @GetMapping
    public String getCartPage(@CookieValue(name = "CART_ID") Cookie cookie) {
        log.info("saved cookie: {} {}", cookie.getName(), cookie.getValue());
        return "cart/index";
    }

    @PostMapping
    public String addCartItem() {
        return "cart/index";
    }
}
