package store.ckin.front.sale.adapter;

import java.util.List;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;

/**
 * 주문 어댑터 인터페이스.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

public interface SaleAdapter {

    List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId);
}
