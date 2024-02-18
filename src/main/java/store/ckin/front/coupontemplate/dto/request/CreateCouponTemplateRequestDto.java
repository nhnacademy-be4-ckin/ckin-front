package store.ckin.front.coupontemplate.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 18
 */

@Getter
@AllArgsConstructor
public class CreateCouponTemplateRequestDto {
    @NotNull(message = "쿠폰 정책 아이디를 입력해주세요")
    private Long policyId;
    private Long bookId;
    private Long categoryId;
    @NotNull(message = "쿠폰 이름을 입력해주세요")
    private String name;
    private Long amount;
}
