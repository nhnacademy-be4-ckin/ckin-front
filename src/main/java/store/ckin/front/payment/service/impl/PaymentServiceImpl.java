package store.ckin.front.payment.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
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

    @Override
    public void createPayment(PaymentRequestDto requestDto) {
        paymentAdapter.requestCreatePayment(requestDto);
    }
}
