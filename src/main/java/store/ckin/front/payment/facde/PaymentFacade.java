package store.ckin.front.payment.facde;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.dto.request.PaymentCancelReasonDto;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;
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

    /**
     * 결제 정보 조회 메서드입니다.
     *
     * @param saleNumber 주문 번호
     * @return 결제 정보
     */
    public SaleInfoResponseDto getPaymentInfo(String saleNumber) {
        return saleService.getPaymentInfo(saleNumber);
    }


    /**
     * 결제 확인 메서드입니다.
     *
     * @param requestDto 결제 확인 요청 객체
     * @return 결제 확인 응답 객체
     */
    public PaymentConfirmResponseDto isConfirmPayment(PaymentConfirmRequestDto requestDto) {
        return paymentService.isConfirmPayment(requestDto);
    }

    /**
     * 결제 생성 메서드입니다.
     *
     * @param requestDto 결제 요청 객체
     * @return 결제 확인 응답 객체
     */
    public PaymentSuccessResponseDto createPayment(PaymentRequestDto requestDto) {
        return paymentService.createPayment(requestDto);
    }

    /**
     * 결제 취소 메서드입니다.
     *
     * @param paymentKey 결제 키
     * @param reason     취소 사유
     */
    public void cancelPayment(String paymentKey, String reason) {
        PaymentCancelReasonDto reasonDto = new PaymentCancelReasonDto(reason);
        paymentService.cancelPayment(paymentKey, reasonDto);
    }
}
