package store.ckin.front.cart.dto.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.ckin.front.cart.dto.request.CartItemCreateRequestDto;

/**
 * 장바구니에 저장되는 상품에 대한 정보를 저장하는 클래스
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItem {
    private long id;
    private String name;
    private int quantity;
    private int regularPrice;
    private int salePrice;
    private String thumbnail;

    /**
     * 상품의 수량을 변경하기 위한 메서드
     *
     * @param quantity 변경할 수량
     */
    public void updateQuantity(int quantity) {
        this.quantity = quantity;
    }

    public static CartItem toCartItem(CartItemCreateRequestDto dto) {
        return CartItem.builder()
                .id(dto.getId())
                .name(dto.getName())
                .quantity(dto.getQuantity())
                .regularPrice(dto.getRegularPrice())
                .salePrice(dto.getSalePrice())
                .thumbnail(dto.getThumbnail())
                .build();
    }
}
