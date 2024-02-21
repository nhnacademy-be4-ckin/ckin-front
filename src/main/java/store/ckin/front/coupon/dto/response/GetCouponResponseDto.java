package store.ckin.front.coupon.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * GetCouponPolicyResponseDto
 *
 * @author : gaeun
 * @version 2024. 02. 20.
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class GetCouponResponseDto {
    private Long id;
    private Long memberId;
    private Long couponTemplateId;
    private Long policyId;
    private Long bookId;
    private Long categoryId;
    private String name;
    private Date expirationDate;
    private Date issueDate;
    private Date usedDate;
}
