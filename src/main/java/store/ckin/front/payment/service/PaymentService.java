package store.ckin.front.payment.service;

import java.io.UnsupportedEncodingException;
import store.ckin.front.payment.dto.request.PaymentCancelReasonDto;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;

/**
 * 결제 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */
public interface PaymentService {

    /**
     * 결제 확인 메서드입니다.
     *
     * @param requestDto 결제 확인 요청 객체
     * @return 결제 확인 응답 객체
     * @throws UnsupportedEncodingException 인코딩 예외
     */
    PaymentConfirmResponseDto isConfirmPayment(PaymentConfirmRequestDto requestDto) throws UnsupportedEncodingException;

    /**
     * 결제 생성 메서드입니다.
     *
     * @param requestDto 결제 요청 객체
     * @return 결제 확인 응답 객체
     */
    PaymentSuccessResponseDto createPayment(PaymentRequestDto requestDto);

    /**
     * 결제 취소 메서드입니다.
     *
     * @param paymentKey 결제 키
     * @param reasonDto  결제 취소 요청 사유가 담긴 DTO
     */
    void cancelPayment(String paymentKey, PaymentCancelReasonDto reasonDto);
}
