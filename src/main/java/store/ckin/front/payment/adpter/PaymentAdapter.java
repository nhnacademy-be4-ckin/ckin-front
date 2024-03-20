package store.ckin.front.payment.adpter;

import store.ckin.front.payment.dto.request.PaymentCancelReasonDto;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;

/**
 * 결제 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */
public interface PaymentAdapter {


    /**
     * 결제 확인 요청 메서드입니다.
     *
     * @param requestDto 결제 확인 요청 객체
     * @return 결제 확인 응답 객체
     */
    PaymentConfirmResponseDto requestConfirmPayment(PaymentConfirmRequestDto requestDto);


    /**
     * 결제 생성 요청 메서드입니다.
     *
     * @param requestDto 결제 생성 요청 객체
     * @return 결제 성공 응답 객체
     */
    PaymentSuccessResponseDto requestCreatePayment(PaymentRequestDto requestDto);

    /**
     * 결제 취소 요청 메서드입니다.
     *
     * @param paymentKey 결제 키
     * @param requestDto 결제 취소 요청 사유가 담긴 DTO
     */
    void requestCancelPayment(String paymentKey, PaymentCancelReasonDto requestDto);
}
