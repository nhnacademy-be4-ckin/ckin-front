package store.ckin.front.cart.service;

import java.util.List;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.cart.dto.request.CartItemDeleteRequestDto;
import store.ckin.front.cart.dto.request.CartItemUpdateRequestDto;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
public interface CartService {
    void createCartItem(String key, CartItem item);

    List<CartItem> readCartItems(String key);

    void updateItemQuantity(String key, CartItemUpdateRequestDto cartItemUpdateRequestDto);
    void deleteCartItem(String key, CartItemDeleteRequestDto cartItemDeleteRequestDto);
}
