package store.ckin.front.coupon.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.extern.jackson.Jacksonized;

/**
 * 보유하고 있는 쿠폰 갯수를 조회하는 Response DTO 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 24.
 */
@Getter
@Builder
@Jacksonized
public class CouponCountResponseDto {
    private Long countCoupon;
}
