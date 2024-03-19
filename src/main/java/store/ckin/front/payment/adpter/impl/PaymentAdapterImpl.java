package store.ckin.front.payment.adpter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.config.properties.TossProperties;
import store.ckin.front.payment.adpter.PaymentAdapter;
import store.ckin.front.payment.dto.request.PaymentCancelReasonDto;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;
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

    private static final String PAYMENT_URL = "/api/payments";

    private final TossProperties tossProperties;

    private final KeyManager keyManager;

    private static final String TOSS_API_URL = "https://api.tosspayments.com/v1/payments";


    /**
     * {@inheritDoc}
     *
     * @param requestDto 결제 확인 요청 객체
     * @return 결제 확인 응답 객체
     */
    @Override
    public PaymentConfirmResponseDto requestConfirmPayment(PaymentConfirmRequestDto requestDto) {

        String widgetSecretKey = keyManager.keyStore(tossProperties.getSecretKey());


        Base64.Encoder encoder = Base64.getEncoder();
        byte[] encodedBytes = encoder.encode((widgetSecretKey + ":").getBytes(StandardCharsets.UTF_8));
        String authorizations = new String(encodedBytes);

        HttpHeaders httpHeaders = getTossHttpHeaders();
        httpHeaders.setBasicAuth(authorizations);

        HttpEntity<PaymentConfirmRequestDto> requestEntity = new HttpEntity<>(requestDto, httpHeaders);

        ResponseEntity<PaymentConfirmResponseDto> exchange = restTemplate.exchange(
                TOSS_API_URL + "/confirm",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });


        return Objects.requireNonNull(exchange.getBody());
    }


    /**
     * {@inheritDoc}
     *
     * @param requestDto 결제 요청 객체
     * @return 결제 성공 응답 객체
     */
    @Override
    public PaymentSuccessResponseDto requestCreatePayment(PaymentRequestDto requestDto) {
        HttpEntity<PaymentRequestDto> requestEntity = new HttpEntity<>(requestDto, getHttpHeaders());

        ResponseEntity<PaymentSuccessResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + PAYMENT_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param paymentKey 결제 키
     * @param requestDto 결제 취소 요청 사유가 담긴 DTO
     */
    @Override
    public void requestCancelPayment(String paymentKey, PaymentCancelReasonDto requestDto) {

        String secretKey = keyManager.keyStore(tossProperties.getSecretKey());

        Base64.Encoder encoder = Base64.getEncoder();
        byte[] encodedBytes = encoder.encode((secretKey + ":").getBytes(StandardCharsets.UTF_8));
        String authorizations = new String(encodedBytes);

        HttpHeaders httpHeaders = getTossHttpHeaders();
        httpHeaders.setBasicAuth(authorizations);

        HttpEntity<PaymentCancelReasonDto> requestEntity = new HttpEntity<>(requestDto, httpHeaders);

        restTemplate.exchange(
                TOSS_API_URL + "/" + paymentKey + "/cancel",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

    }

    private HttpHeaders getTossHttpHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));

        return httpHeaders;
    }
}
