package store.ckin.front.payment.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.payment.dto.request.PaymentCancelRequestDto;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;
import store.ckin.front.payment.facde.PaymentFacade;

/**
 * 결제 REST Controller.
 *
 * @author 정승조
 * @version 2024. 03. 08.
 */

@Slf4j
@RestController
@RequestMapping("/toss")
@RequiredArgsConstructor
public class PaymentRestController {

    private final PaymentFacade paymentFacade;

    /**
     * 결제 요청 API.
     *
     * @param requestDto 결제 요청 JSON
     * @return 결제 요청 결과
     */
    @PostMapping("/confirm")
    public ResponseEntity<PaymentConfirmResponseDto> confirmPayment(@RequestBody PaymentConfirmRequestDto requestDto) {

        PaymentConfirmResponseDto confirmPayment = paymentFacade.isConfirmPayment(requestDto);

        if (confirmPayment.getStatus().equals("DONE")) {
            return ResponseEntity.ok(confirmPayment);
        } else {
            return ResponseEntity.badRequest().body(confirmPayment);
        }
    }

    /**
     * 결제 성공 (POST) 요청 메서드입니다.
     *
     * @param requestDto 결제 요청 DTO
     * @return 결제 성공 응답 DTO
     */
    @PostMapping("/success")
    public ResponseEntity<PaymentSuccessResponseDto> successPayment(@RequestBody PaymentRequestDto requestDto) {
        return ResponseEntity.ok(paymentFacade.createPayment(requestDto));
    }

    /**
     * 결제 취소 요청 메서드입니다.
     *
     * @param requestDto 결제 키와 사유가 담긴 DTO
     * @return 결제 취소 성공 응답
     */
    @PostMapping("/cancel")
    public ResponseEntity<Void> cancelPayment(@RequestBody PaymentCancelRequestDto requestDto) {

        paymentFacade.cancelPayment(requestDto.getPaymentKey(), requestDto.getCancelReason());
        return ResponseEntity.ok().build();
    }
}
