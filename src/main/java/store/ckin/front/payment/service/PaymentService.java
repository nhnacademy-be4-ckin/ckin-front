package store.ckin.front.payment.service;

import java.io.UnsupportedEncodingException;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;

/**
 * 결제 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */
public interface PaymentService {

    void createPayment(PaymentRequestDto requestDto);

    PaymentConfirmResponseDto isConfirmPayment(PaymentConfirmRequestDto jsonBody) throws UnsupportedEncodingException;
}
