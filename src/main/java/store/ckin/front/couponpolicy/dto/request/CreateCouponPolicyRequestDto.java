package store.ckin.front.couponpolicy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotNull;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 08
 */
@Getter
@AllArgsConstructor
public class CreateCouponPolicyRequestDto {
    @NotNull(message = "쿠폰 코드를 입력해주세요")
    private Long couponCodeId;
    @NotNull(message = "쿠폰의 최소 가격을 입력해주세요")
    private Integer minOrderPrice;
    private Integer discountPrice;
    private Integer discountRate;
    private Integer maxDiscountPrice;
}
