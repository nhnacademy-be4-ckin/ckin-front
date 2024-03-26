package store.ckin.front.cart.adapter;

import store.ckin.front.cart.dto.request.CartCreateRequestDto;
import store.ckin.front.cart.dto.response.CartIdResponseDto;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
public interface CartAdapter {
    void insertCart(CartCreateRequestDto cartCreateRequestDto);

    CartIdResponseDto selectCartIdByMemberId(Long memberId);
}
