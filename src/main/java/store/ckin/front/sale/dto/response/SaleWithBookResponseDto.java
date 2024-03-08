package store.ckin.front.sale.dto.response;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import store.ckin.front.booksale.dto.response.BookSaleResponseDto;

/**
 * 주문 상세 정보와 주문한 책 정보 응답 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 07.
 */

@Getter
@AllArgsConstructor
public class SaleWithBookResponseDto {

    private final List<BookSaleResponseDto> bookSaleList = new ArrayList<>();

    private String saleTitle;

    private String memberEmail;

    private String saleOrderName;

    private String saleOrderContact;

    private String saleReceiverName;

    private String saleReceiverContact;

    private Integer deliveryFee;

    private LocalDate saleDeliveryDate;

    private String postcode;

    private String address;

    private Integer pointUsage;

    private Integer totalPrice;

}
