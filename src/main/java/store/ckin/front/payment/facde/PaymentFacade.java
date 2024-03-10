package store.ckin.front.payment.facde;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.service.PaymentService;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * {class name}.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@Service
@RequiredArgsConstructor
public class PaymentFacade {

    private final PaymentService paymentService;

    private final SaleService saleService;

    public SaleInfoResponseDto getPaymentInfo(String saleNumber) {
        return saleService.getPaymentInfo(saleNumber);
    }
}
