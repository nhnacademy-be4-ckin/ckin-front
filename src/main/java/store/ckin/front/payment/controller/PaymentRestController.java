package store.ckin.front.payment.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.payment.dto.request.PaymentConfirmRequestDto;
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
    @RequestMapping(value = "/confirm")
    public ResponseEntity<PaymentConfirmResponseDto> confirmPayment(@RequestBody PaymentConfirmRequestDto requestDto)
            throws Exception {

        log.debug("confirm requestDto = {}", requestDto);
        PaymentConfirmResponseDto confirmPayment = paymentFacade.isConfirmPayment(requestDto);

        log.debug("confirmPayment = {}", confirmPayment);

        return ResponseEntity.ok(confirmPayment);
    }
}
