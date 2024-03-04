package store.ckin.front.cart.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 장바구니 상품 수량을 변경하기 위한 Dto 클래스
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
