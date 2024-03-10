package store.ckin.front.payment.facde;

import java.io.UnsupportedEncodingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.service.PaymentService;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 결제 퍼사드 클래스입니다.
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

    public void createPayment(PaymentRequestDto requestDto) {
        paymentService.createPayment(requestDto);
    }

    public PaymentConfirmResponseDto isConfirmPayment(PaymentConfirmRequestDto requestDto)
            throws UnsupportedEncodingException {
        return paymentService.isConfirmPayment(requestDto);
    }
}
