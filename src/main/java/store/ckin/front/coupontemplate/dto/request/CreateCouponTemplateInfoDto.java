package store.ckin.front.coupontemplate.dto.request;

import java.sql.Date;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 사용자의 입력을 받기 위한 쿠폰 템플릿 DTO 입니다.
 *
 * @author : gaeun
 * @version : 2024. 03. 17
 */
@Getter
@AllArgsConstructor
@ToString
public class CreateCouponTemplateInfoDto {
    @NotNull(message = "쿠폰 정책 아이디를 입력해주세요")
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long policyId;
    @NotNull(message = "쿠폰 템플릿 타입 아이디를 입력해주세요.")
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long typeId;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Long value;
    @NotBlank(message = "쿠폰 이름을 입력해주세요")
    private String name;
    @PositiveOrZero(message = "0보다 큰 값을 입력해주세요")
    private Integer duration;
    private Date expirationDate;
    private Boolean isBirthPolicy;
}
