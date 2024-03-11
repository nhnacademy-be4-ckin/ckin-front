package store.ckin.front.payment.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.dto.response.PaymentConfirmResponseDto;
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
     * @throws Exception 예외 처리
     */
    @PostMapping("/confirm")
    public ResponseEntity<PaymentConfirmResponseDto> confirmPayment(@RequestBody PaymentConfirmRequestDto requestDto)
            throws Exception {

        log.debug("confirm requestDto = {}", requestDto);
        PaymentConfirmResponseDto confirmPayment = paymentFacade.isConfirmPayment(requestDto);

        log.debug("confirmPayment = {}", confirmPayment);

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
     * @return 메인 페이지로 리다이렉트
     */
    @PostMapping("/success")
    public ResponseEntity<Void> successPayment(@RequestBody PaymentRequestDto requestDto) {

        paymentFacade.createPayment(requestDto);

        log.debug("SUCCESS requestDto = {}", requestDto);
        return ResponseEntity.ok().build();
    }
}
