package store.ckin.front.util;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import store.ckin.front.cart.dto.CartItemDto;

/**
 * description:
 *
 * @author : S20184366
 * @version : 2024. 02. 28
 */

@Slf4j
@RequiredArgsConstructor
@Service
public class RedisUtils {
    private final RedisTemplate<String, Object> redisTemplate;
    private static final Duration EXPIRE_CART_ITEMS = Duration.ofDays(2);

    public void addCartItem(String key, CartItemDto cartItem) {
        HashOperations<String, String, List<CartItemDto>> hashOperations = redisTemplate.opsForHash();
        List<CartItemDto> hashValue = hashOperations.get(key, "user_cart");
        if(Objects.isNull(hashValue)) {
            hashOperations.put(key, "user_cart", new ArrayList<>());
        }
        List<CartItemDto> userCart = hashOperations.get(key, "user_cart");
        userCart.add(cartItem);
        hashOperations.put(key, "user_cart", userCart);
    }

    public List<CartItemDto> getCartItems(String key) {
        List<CartItemDto> userCart = (List<CartItemDto>) redisTemplate.opsForHash().get(key, "user_cart");
        if(Objects.isNull(userCart)) {
            return new ArrayList<>();
        }
        log.debug("cart not null");
        return userCart;
    }

}
