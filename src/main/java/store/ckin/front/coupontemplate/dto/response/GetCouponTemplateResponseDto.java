package store.ckin.front.coupontemplate.dto.response;

import lombok.*;

/**
 * 쿠폰 템플릿 응답 DTO
 *
 * @author : gaeun
 * @version : 2024. 02. 18
 */

@Getter
public class GetCouponTemplateResponseDto {
    private Long id;
    private Long policyId;
    private Long bookId;
    private Long categoryId;
    private String name;
    private Long amount;
}
