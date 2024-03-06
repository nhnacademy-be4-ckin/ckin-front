package store.ckin.front.cart.dto.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 장바구니에 저장되는 상품에 대한 정보를 저장하는 클래스
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
@Getter
@NoArgsConstructor
@Setter
public class CartItem {
    private String name;
    private long id;
    private int quantity;
    private int unitPrice;

    /**
     * 상품의 수량을 변경하기 위한 메서드
     *
     * @param quantity 변경할 수량
     */
    public void updateQuantity(int quantity) {
        this.quantity = quantity;
    }
}
