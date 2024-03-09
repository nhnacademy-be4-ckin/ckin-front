package store.ckin.front.payment.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.payment.service.PaymentService;

/**
 * {class name}.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentAdapter paymentAdapter;

}
