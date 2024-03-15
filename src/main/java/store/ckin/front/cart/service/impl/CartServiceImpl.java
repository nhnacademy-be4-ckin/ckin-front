package store.ckin.front.cart.service.impl;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.cart.dto.request.CartItemCreateRequestDto;
import store.ckin.front.cart.dto.request.CartItemDeleteRequestDto;
import store.ckin.front.cart.dto.request.CartItemUpdateRequestDto;
import store.ckin.front.cart.exception.CartItemNotFoundException;
import store.ckin.front.cart.exception.ItemAlreadyExistException;
import store.ckin.front.cart.service.CartService;

/**
 * 사용자 장바구니에 대한 아이템 추가, 갱신, 삭제, 조회를 담당하는 서비스 클래스
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
@Service
public class CartServiceImpl implements CartService {
    private final RedisTemplate<String, Object> redisTemplate;
    private static final Duration EXPIRE_CART_ITEMS = Duration.ofDays(2);
    private static final String CART_HASH_KEY = "user_cart";

    public CartServiceImpl(@Qualifier("redisTemplate") RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    /**
     * {@inheritDoc}
     *
     * @param key  현재 유저의 UUID
     * @param item 추가하고자 하는 상품에 대한 정보를 담은 Dto
     */
    public void createCartItem(String key, CartItemCreateRequestDto item) {
        // 카트가 존재하지 않을 수도 있으므로, 없으면 생성
        initCartAndUpdateExpire(key);

        // Set을 고려하는 것은 어떤지?
        List<CartItem> currentUserCart = (List<CartItem>) redisTemplate.opsForHash().get(key, CART_HASH_KEY);
        assert currentUserCart != null;
        Optional<CartItem>
                selectedItem =
                currentUserCart.stream().filter(cartItem -> cartItem.getId() == item.getId())
                        .findFirst();


        if (selectedItem.isPresent()) {
            throw new ItemAlreadyExistException(item.getId());
        }
        currentUserCart.add(CartItem.toCartItem(item));
        redisTemplate.opsForHash().put(key, CART_HASH_KEY, currentUserCart);
    }

    /**
     * {@inheritDoc}
     *
     * @param key 현재 유저의 UUID
     * @return
     */
    public List<CartItem> readCartItems(String key) {
        initCartAndUpdateExpire(key);

        return (List<CartItem>) redisTemplate.opsForHash().get(key, CART_HASH_KEY);
    }

    /**
     * {@inheritDoc}
     *
     * @param key                      현재 유저의 UUID
     * @param cartItemUpdateRequestDto 수량 변경을 원하는 상품의 정보가 담긴 Dto
     */
    public void updateItemQuantity(String key, CartItemUpdateRequestDto cartItemUpdateRequestDto) {
        initCartAndUpdateExpire(key);

        List<CartItem> currentUserCart = (List<CartItem>) redisTemplate.opsForHash().get(key, CART_HASH_KEY);
        assert currentUserCart != null;
        Optional<CartItem>
                selectedItem =
                currentUserCart.stream().filter(cartItem -> cartItem.getId() == cartItemUpdateRequestDto.getId())
                        .findFirst();

        if (selectedItem.isEmpty()) {
            throw new CartItemNotFoundException(
                    String.format("Item(id=%d) is not exist in cart", cartItemUpdateRequestDto.getId()));
        }
        CartItem updatedItem = selectedItem.get();
        updatedItem.updateQuantity(cartItemUpdateRequestDto.getQuantity());

        redisTemplate.opsForHash().put(key, CART_HASH_KEY, currentUserCart);
    }

    /**
     * {@inheritDoc}
     *
     * @param key                      현재 유저의 UUID
     * @param cartItemDeleteRequestDto 삭제할 상품의 ID가 담긴 Dto
     */
    public void deleteCartItem(String key, CartItemDeleteRequestDto cartItemDeleteRequestDto) {
        initCartAndUpdateExpire(key);

        List<CartItem> currentUserCart = (List<CartItem>) redisTemplate.opsForHash().get(key, CART_HASH_KEY);
        assert currentUserCart != null;
        if (!currentUserCart.removeIf(cartItem -> cartItem.getId() == cartItemDeleteRequestDto.getId())) {
            throw new CartItemNotFoundException(
                    String.format("Item(id=%d) is not exist in cart", cartItemDeleteRequestDto.getId()));
        }

        redisTemplate.opsForHash().put(key, CART_HASH_KEY, currentUserCart);
    }

    /**
     * {@inheritDoc}
     *
     * @param key 현재 유저의 UUID
     */
    public void deleteCartItemAll(String key) {
        redisTemplate.opsForHash().delete(key, CART_HASH_KEY);
    }

    /**
     * {@inheritDoc}
     *
     * @param key 현재 유저의 UUID
     */
    public void initCartAndUpdateExpire(String key) {
        HashOperations<String, String, Object> hashOperations = redisTemplate.opsForHash();
        if (Objects.isNull(hashOperations.get(key, CART_HASH_KEY))) {
            hashOperations.put(key, CART_HASH_KEY, new ArrayList<>());
        }
        redisTemplate.expire(key, EXPIRE_CART_ITEMS);
    }
}
