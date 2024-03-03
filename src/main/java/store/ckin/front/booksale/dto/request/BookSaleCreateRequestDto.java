package store.ckin.front.booksale.dto.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter
@Setter
@NoArgsConstructor
public class BookSaleCreateRequestDto {

    @Positive(message = "유효한 책 아이디를 입력해주세요.")
    @NotNull(message = "책 아이디가 입력되지 않았습니다")
    private Long bookId;

    @PositiveOrZero(message = "유효한 쿠폰 아이디를 입력해주세요.")
    @NotNull(message = "쿠폰 아이디가 입력되지 않았습니다")
    private Long appliedCouponId;

    @PositiveOrZero(message = "유효한 포장 아이디를 입력해주세요.")
    @NotNull(message = "포장 아이디가 입력되지 않았습니다")
    private Long packagingId;

    @Positive(message = "책 수량은 1보다 작을 수 없습니다.")
    @NotNull(message = "책 수량이 입력되지 않았습니다")
    private Integer quantity;

    @Positive(message = "책 결제 금액은 1보다 작을 수 없습니다.")
    @NotNull(message = "책 결제 금액이 입력되지 않았습니다")
    private Integer paymentAmount;
}
