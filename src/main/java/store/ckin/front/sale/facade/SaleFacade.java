package store.ckin.front.sale.facade;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.service.BookService;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;
import store.ckin.front.packaging.service.PackagingService;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SalePolicyResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.service.SaleService;

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

    private final SaleService saleService;


    public SalePolicyResponseDto getPolicyList() {
        return SalePolicyResponseDto.builder()
                .deliveryPolicy(deliveryPolicyService.getActiveDeliveryPolicy())
                .packagingPolicies(packagingService.getPackagingPolicies())
                .build();
    }

    public List<BookExtractionResponseDto> getBookSaleList(List<Long> bookIds) {
        return bookService.getBookSaleList(bookIds);
    }


    public Long createSale(SaleCreateRequestDto requestDto) {
        return saleService.createSale(requestDto);
    }

    public List<SaleResponseDto> getSales() {
        return saleService.getSales();
    }
}
