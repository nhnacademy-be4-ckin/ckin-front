package store.ckin.front.payment.adpter;

import store.ckin.front.payment.dto.request.PaymentRequestDto;

/**
 * 결제 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */
public interface PaymentAdapter {

    void requestCreatePayment(PaymentRequestDto requestDto);
}
