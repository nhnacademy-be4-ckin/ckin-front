package store.ckin.front.couponpolicy.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

/**
 * 쿠폰 정책 생성 요청 DTO
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
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Integer minOrderPrice;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Integer discountPrice;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Integer discountRate;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Integer maxDiscountPrice;
}
