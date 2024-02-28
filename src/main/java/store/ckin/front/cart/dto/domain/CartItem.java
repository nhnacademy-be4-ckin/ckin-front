package store.ckin.front.cart.dto.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {
    private String name;
    private long id;
    private int quantity;
    private int unitPrice;

    public void updateQuantity(int quantity) {
        this.quantity = quantity;
    }
}
