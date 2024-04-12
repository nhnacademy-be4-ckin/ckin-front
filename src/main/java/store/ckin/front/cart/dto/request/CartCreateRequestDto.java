package store.ckin.front.cart.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 26
 */
@AllArgsConstructor
@Getter
public class CartCreateRequestDto {
    private Long memberId;
    private String cartId;
}
