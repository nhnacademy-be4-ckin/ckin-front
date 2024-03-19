package store.ckin.front.payment.service.impl;

import java.io.UnsupportedEncodingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.payment.dto.request.PaymentCancelReasonDto;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;
import store.ckin.front.payment.service.PaymentService;

/**
 * 결제 서비스 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentAdapter paymentAdapter;


    /**
     * {@inheritDoc}
     *
     * @param requestDto 결제 확인 요청 객체
     * @return 결제 확인 응답 객체
     * @throws UnsupportedEncodingException 인코딩 예외
     */
    @Override
    public PaymentConfirmResponseDto isConfirmPayment(PaymentConfirmRequestDto requestDto)
            throws UnsupportedEncodingException {
        return paymentAdapter.requestConfirmPayment(requestDto);
    }

    /**
     * {@inheritDoc}
     *
     * @param requestDto 결제 요청 객체
     */
    @Override
    public PaymentSuccessResponseDto createPayment(PaymentRequestDto requestDto) {
        return paymentAdapter.requestCreatePayment(requestDto);
    }

    /**
     * {@inheritDoc}
     *
     * @param paymentKey 결제 키
     * @param requestDto 결제 취소 요청 사유가 담긴 DTO
     */
    @Override
    public void cancelPayment(String paymentKey, PaymentCancelReasonDto requestDto) {

        paymentAdapter.requestCancelPayment(paymentKey, requestDto);
    }
}
