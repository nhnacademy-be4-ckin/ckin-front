package store.ckin.front.cart.controller;

import java.util.List;
import java.util.Objects;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.cart.dto.domain.CartItem;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 29
 */
@Controller
@RequestMapping("/sale")
public class SaleTestController {
    @GetMapping
    public String getSalePage(Model model) {
        List<CartItem> placeItems = (List<CartItem>) model.getAttribute("PLACE_ITEMS");
        if(Objects.isNull(placeItems)) {
            throw new RuntimeException("item is null");
        }
        model.addAttribute("PLACE_ITEMS", placeItems);
        return "cart/test";
    }
}
