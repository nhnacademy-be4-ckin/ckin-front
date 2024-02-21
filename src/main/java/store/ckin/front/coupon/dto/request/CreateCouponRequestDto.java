package store.ckin.front.coupon.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * CreateCouponRequestDto
 *
 * @author : 이가은
 * @version 2024. 02. 20.
 */
@Getter
@AllArgsConstructor
public class CreateCouponRequestDto {
    @NotNull(message = "회원 아이디를 입력해주세요.")
    private Long memberId;
    @NotNull(message = "쿠폰 템플릿 아이디를 입력해주세요.")
    private Long couponTemplateId;
    @NotNull(message = "쿠폰 만료일을 입력해주세요.")
    private Date expirationDate;
    @NotNull(message = "쿠폰 발급일을 입력해주세요.")
    private Date issueDate;
    private Date usedDate;
}
