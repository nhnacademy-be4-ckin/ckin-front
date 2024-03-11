package store.ckin.front.payment.adpter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.config.properties.TossProperties;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.skm.util.KeyManager;

/**
 * 결제 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 09.
 */

@Slf4j
@Component
@RequiredArgsConstructor
public class PaymentAdapterImpl implements PaymentAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private final TossProperties tossProperties;

    private final KeyManager keyManager;

    private static final String TOSS_API_URL = "https://api.tosspayments.com/v1/payments/confirm";

    /**
     * {@inheritDoc}
     *
     * @param requestDto 결제 요청 객체
     */
    @Override
    public void requestCreatePayment(PaymentRequestDto requestDto) {
        HttpEntity<PaymentRequestDto> requestEntity = new HttpEntity<>(requestDto, getHttpHeaders());

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/payment",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                });
    }

    /**
     * {@inheritDoc}
     *
     * @param requestDto 결제 확인 요청 객체
     * @return 결제 확인 응답 객체
     * @throws UnsupportedEncodingException 인코딩 예외
     */
    @Override
    public PaymentConfirmResponseDto requestConfirmPayment(PaymentConfirmRequestDto requestDto)
            throws UnsupportedEncodingException {

        String widgetSecretKey = keyManager.keyStore(tossProperties.getSecretKey());


        Base64.Encoder encoder = Base64.getEncoder();
        byte[] encodedBytes = encoder.encode((widgetSecretKey + ":").getBytes(StandardCharsets.UTF_8));
        String authorizations = new String(encodedBytes);

        HttpHeaders httpHeaders = getHttpHeaders();
        httpHeaders.setBasicAuth(authorizations);

        HttpEntity<PaymentConfirmRequestDto> requestEntity = new HttpEntity<>(requestDto, httpHeaders);

        ResponseEntity<PaymentConfirmResponseDto> exchange = restTemplate.exchange(
                TOSS_API_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });


        log.debug("status = {}", exchange.getStatusCode());
        log.debug("body = {}", exchange.getBody());

        PaymentConfirmResponseDto responseDto = Objects.requireNonNull(exchange.getBody());

        log.debug("responseDto = {}", responseDto);

        return responseDto;
    }
}
