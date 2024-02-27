package store.ckin.front.cart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
@Controller
@RequestMapping("/cart")
public class CartController {
    @GetMapping
    public String cartPage() {
        return "cart/index";
    }
}
