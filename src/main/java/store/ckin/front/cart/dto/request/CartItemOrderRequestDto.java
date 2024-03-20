package store.ckin.front.cart.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 03. 21
 */
@AllArgsConstructor
@Getter
public class CartItemOrderRequestDto {
    private long id;
    private int quantity;
}
