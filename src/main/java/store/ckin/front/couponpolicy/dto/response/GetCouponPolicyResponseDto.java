package store.ckin.front.couponpolicy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 쿠폰 정책 응답 DTO
 *
 * @author : gaeun
 * @version : 2024. 02. 12
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class GetCouponPolicyResponseDto {
    private Long id;
    private Integer minOrderPrice;
    private Integer discountPrice;
    private Integer discountRate;
    private Integer maxDiscountPrice;
}
