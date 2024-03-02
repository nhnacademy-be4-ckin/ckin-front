package store.ckin.front.sale.dto.request;

import java.util.ArrayList;
import java.util.List;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * 주문 생성 요청 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 02.
 */

@ToString
@Getter
@AllArgsConstructor
public class CreateSaleRequestDto {

    private final List<BookSale> bookSaleList = new ArrayList<>();

    @NotBlank(message = "주문자 이름을 입력해주세요.")
    private String saleOrderName;

    @NotBlank(message = "주문자 연락처를 입력해주세요.")
    private String saleOrderContact;

    @NotBlank(message = "수령자 이름을 입력해주세요.")
    private String saleReceiverName;

    @NotBlank(message = "수령자 연락처를 입력해주세요.")
    private String saleReceiverContact;

    @NotNull(message = "배송비를 입력해주세요.")
    private Integer deliveryFee;

    @NotNull(message = "총 가격을 입력해주세요.")
    private String saleDeliveryDate;
    private String postcode;
    private String address;
    private String detailAddress;

    @ToString
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class BookSale {

        @Positive(message = "유효한 책 아이디를 입력해주세요.")
        @NotNull(message = "책 아이디가 입력되지 않았습니다")
        private Long bookId;

        @PositiveOrZero(message = "유효한 쿠폰 아이디를 입력해주세요.")
        @NotNull(message = "쿠폰 아이디가 입력되지 않았습니다")
        private Long appliedCouponId;

        @PositiveOrZero(message = "유효한 포장 아이디를 입력해주세요.")
        @NotNull(message = "포장 아이디가 입력되지 않았습니다")
        private Long packagingId;

        @Positive(message = "책 가격은 1보다 작을 수 없습니다.")
        @NotNull(message = "책 가격이 입력되지 않았습니다")
        private Integer bookSalePrice;

    }
}


