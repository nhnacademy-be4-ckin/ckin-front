package store.ckin.front.payment.service.impl;

import java.io.UnsupportedEncodingException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
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
     * 결제 생성 메서드입니다.
     *
     * @param requestDto 결제 요청 객체
     */
    @Override
    public void createPayment(PaymentRequestDto requestDto) {
        paymentAdapter.requestCreatePayment(requestDto);
    }

    /**
     * 결제 확인 메서드입니다.
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
}
