package store.ckin.front.cart.controller;

import java.util.List;
import javax.servlet.http.Cookie;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.cart.dto.request.CartItemOrderDto;
import store.ckin.front.cart.service.CartService;

/**
 * 주문 요청을 받는 장바구니 Rest Controller
 *
 * @author : dduneon
 * @version : 2024. 03. 21
 */
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/cart/order")
public class CartRestController {
    private final CartService cartService;

    /**
     * 장바구니 상품을 주문하기 위한 메서드.
     *
     * @return 결제 페이지로 리다이렉트
     */
    @PostMapping
    public ResponseEntity<Void> placeOrderOne(@CookieValue(name = "CART_ID") Cookie cookie, @RequestBody
    List<CartItemOrderDto> orderList) {
        log.debug("receive size : {}", orderList.size());
        for (CartItemOrderDto orderDto : orderList) {
            log.debug("info : {}, {}, {}", orderDto.getId(), orderDto.getQuantity(), orderDto.getName());
        }
        cartService.orderCartItems(cookie.getValue(), orderList);

        return ResponseEntity.ok().build();
    }
}
