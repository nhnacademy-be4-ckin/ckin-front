package store.ckin.front.cart.dto;

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
@AllArgsConstructor
@NoArgsConstructor
public class CartItemDto {
    private String name;
    private long id;
    private int quantity;
    private int unitPrice;
}
