package store.ckin.front.coupontemplate.dto.response;

import lombok.Getter;

import java.time.LocalDate;

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
    private Integer minOrderPrice;
    private Integer discountPrice;
    private Integer discountRate;
    private Integer maxDiscountPrice;
    private Long bookId;
    private Long categoryId;
    private String name;
    private Long amount;
    private Long typeId;
    private Integer duration;
    private LocalDate expirationDate;
}
