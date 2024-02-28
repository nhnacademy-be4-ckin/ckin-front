package store.ckin.front.sale.facade;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import store.ckin.front.book.dto.response.BookSaleResponseDto;
import store.ckin.front.book.service.BookService;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;
import store.ckin.front.packaging.service.PackagingService;
import store.ckin.front.sale.dto.SalePolicyDto;

/**
 * 주문 퍼사드 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Component
@RequiredArgsConstructor
public class SaleFacade {


    private final PackagingService packagingService;

    private final DeliveryPolicyService deliveryPolicyService;

    private final BookService bookService;



    public SalePolicyDto getPolicyList() {
        return SalePolicyDto.builder()
                .deliveryPolicy(deliveryPolicyService.getActiveDeliveryPolicy())
                .packagingPolicies(packagingService.getPackagingPolicies())
                .build();
    }

    public List<BookSaleResponseDto> getBookSaleList(List<Long> bookIds) {
        return bookService.getBookSaleList(bookIds);
    }


}
