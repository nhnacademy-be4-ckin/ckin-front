package store.ckin.front.coupontemplate.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import java.time.LocalDate;

/**
 * 쿠폰 템플릿 생성 및 수정 요청 DTO
 *
 * @author : gaeun
 * @version : 2024. 02. 18
 */

@Getter
@AllArgsConstructor
public class CreateCouponTemplateRequestDto {
    @NotNull(message = "쿠폰 정책 아이디를 입력해주세요")
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long policyId;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long bookId;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long categoryId;
    @NotNull(message = "쿠폰 템플릿 타입 아이디를 입력해주세요.")
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long typeId;
    @NotBlank(message = "쿠폰 이름을 입력해주세요")
    private String name;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long amount;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Integer duration;
    private LocalDate expirationDate;

    public void updateExpiration(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
    }
}
