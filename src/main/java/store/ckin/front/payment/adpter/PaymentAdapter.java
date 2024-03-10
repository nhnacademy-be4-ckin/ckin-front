package store.ckin.front.payment.adpter;

import java.io.UnsupportedEncodingException;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;

/**
 * 결제 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */
public interface PaymentAdapter {

    void requestCreatePayment(PaymentRequestDto requestDto);

    PaymentConfirmResponseDto requestConfirmPayment(PaymentConfirmRequestDto requestDto) throws UnsupportedEncodingException;
}
