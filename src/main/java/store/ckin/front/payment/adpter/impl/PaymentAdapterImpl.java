package store.ckin.front.payment.adpter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.payment.dto.request.PaymentRequestDto;

/**
 * 결제 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@Component
@RequiredArgsConstructor
public class PaymentAdapterImpl implements PaymentAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    @Override
    public void requestCreatePayment(PaymentRequestDto requestDto) {
        HttpEntity<PaymentRequestDto> requestEntity = new HttpEntity<>(requestDto);

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/payment",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                });
    }
}
