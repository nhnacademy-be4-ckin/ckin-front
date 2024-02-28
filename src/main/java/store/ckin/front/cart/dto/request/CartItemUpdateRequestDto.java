package store.ckin.front.cart.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
@Getter
@AllArgsConstructor
public class CartItemUpdateRequestDto {
    private long id;
    private int quantity;
}
