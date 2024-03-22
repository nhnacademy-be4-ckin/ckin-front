package store.ckin.front.cart.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 03. 21
 */
@NoArgsConstructor
@Getter
public class CartItemOrderDto {
    private long id;
    private int quantity;
    private String name;
}
