package store.ckin.front.cart.service;

import java.util.List;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.cart.dto.request.CartItemCreateRequestDto;
import store.ckin.front.cart.dto.request.CartItemDeleteRequestDto;
import store.ckin.front.cart.dto.request.CartItemOrderDto;
import store.ckin.front.cart.dto.request.CartItemUpdateRequestDto;

/**
 * 장바구니 임시 저장을 담당하는 서비스 클래스
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
public interface CartService {

    /**
     * 장바구니에 상품을 추가하는 메서드
     *
     * @param key  현재 유저의 UUID
     * @param item 추가하고자 하는 상품에 대한 정보를 담은 Dto
     */
    void createCartItem(String key, CartItemCreateRequestDto item);

    /**
     * 장바구니 상품들을 읽어오는 메서드
     *
     * @param key 현재 유저의 UUID
     * @return 해당 유저의 장바구니에 담긴 상품 리스트
     */
    List<CartItem> readCartItems(String key);

    /**
     * 주문 요청한 상품들을 읽어오는 메서드
     *
     * @param key 현재 유저의 UUID
     * @return 해당 유저가 주문한 상품 리스트
     */
    List<CartItemOrderDto> readOrderItems(String key);

    /**
     * 장바구니 상품의 수량을 변경하는 메서드
     *
     * @param key                      현재 유저의 UUID
     * @param cartItemUpdateRequestDto 수량 변경을 원하는 상품의 정보가 담긴 Dto
     */
    void updateItemQuantity(String key, CartItemUpdateRequestDto cartItemUpdateRequestDto);

    /**
     * 장바구니에서 특정 상품을 삭제하는 메서드
     *
     * @param key                      현재 유저의 UUID
     * @param cartItemDeleteRequestDto 삭제할 상품의 ID가 담긴 Dto
     */
    void deleteCartItem(String key, CartItemDeleteRequestDto cartItemDeleteRequestDto);

    /**
     * 주문한 상품들을 장바구니에서 삭제하는 메서드
     *
     * @param key         현재 유저의 UUID
     * @param deleteItems 유저가 주문한(삭제할) 상품 리스트
     */
    void deleteCartItems(String key, List<CartItemOrderDto> deleteItems);

    /**
     * 선택한 상품을 주문하는 메서드
     *
     * @param key        현재 유저의 UUID
     * @param orderItems 유저가 주문한 상품 리스트
     */
    void orderCartItems(String key, List<CartItemOrderDto> orderItems);

    /**
     * 장바구니 전체 상품을 삭제하는 메서드
     *
     * @param key 현재 유저의 UUID
     */
    void deleteCartItemAll(String key);
}
