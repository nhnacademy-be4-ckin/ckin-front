package store.ckin.front.coupontemplate.dto.request;

import java.sql.Date;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

/**
 * 쿠폰 템플릿 생성 및 수정 요청 DTO
 *
 * @author : gaeun
 * @version : 2024. 02. 18
 */

@Getter
@AllArgsConstructor
@ToString
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
    private Date expirationDate;
    private Boolean state;

    @Builder
    public CreateCouponTemplateRequestDto(Long policyId, Long typeId, String name, Long amount, Integer duration,
                                          Date expirationDate, Boolean state) {
        this.policyId = policyId;
        this.typeId = typeId;
        this.name = name;
        this.amount = amount;
        this.duration = duration;
        this.expirationDate = expirationDate;
        this.state = state;
    }

    public void updateExpiration(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public void updateBookId(Long value) {
        this.bookId = value;
    }

    public void updateCategoryId(Long value) {
        this.categoryId = value;
    }
}
