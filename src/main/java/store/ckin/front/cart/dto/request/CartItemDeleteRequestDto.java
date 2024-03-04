package store.ckin.front.cart.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 상품 삭제를 위한 Dto 클래스
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
@Getter
@AllArgsConstructor
public class CartItemDeleteRequestDto {
    private long id;
}
