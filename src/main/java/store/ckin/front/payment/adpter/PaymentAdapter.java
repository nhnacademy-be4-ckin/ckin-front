package store.ckin.front.payment.adpter;

import java.io.UnsupportedEncodingException;
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
     * @throws UnsupportedEncodingException 인코딩 예외
     */
    PaymentConfirmResponseDto requestConfirmPayment(PaymentConfirmRequestDto requestDto)
            throws UnsupportedEncodingException;

    /**
     * 결제 생성 요청 메서드입니다.
     *
     * @param requestDto 결제 요청 객체
     */
    PaymentSuccessResponseDto requestCreatePayment(PaymentRequestDto requestDto);

}
