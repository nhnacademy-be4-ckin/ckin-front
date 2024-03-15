package store.ckin.front.coupon.dto.response;

import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

/**
 * 쿠폰 응답 DTO
 *
 * @author : gaeun
 * @version 2024. 02. 20.
 */
@Getter
@ToString
@AllArgsConstructor
public class GetCouponResponseDto {
    private Long id;
    private Long memberId;
    private Long couponTemplateId;
    private Long policyId;
    private Long couponCodeId;
    private Integer minOrderPrice;
    private Integer discountPrice;
    private Integer discountRate;
    private Integer maxDiscountPrice;
    private Long bookId;
    private Long categoryId;
    private Long typeId;
    private String name;
    private Date expirationDate;
    private Date issueDate;
    private Date usedDate;
}
