package store.ckin.front.cart.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 11
 */

@Getter
@AllArgsConstructor
public class CartItemCreateRequestDto {
    private long id;
    private String name;
    private int quantity;
    private int regularPrice;
    private int salePrice;
    private String thumbnail;
}
