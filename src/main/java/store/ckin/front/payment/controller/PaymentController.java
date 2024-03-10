package store.ckin.front.payment.controller;

import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.config.properties.TossProperties;
import store.ckin.front.payment.dto.request.PaymentRequestDto;
import store.ckin.front.payment.facde.PaymentFacade;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;

/**
 * 결제 컨트롤러 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 07.
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/payment")
public class PaymentController {

    private final PaymentFacade paymentFacade;

    private final TossProperties tossProperties;

    /**
     * 결제 페이지를 요청하는 메서드입니다.
     *
     * @param saleNumber 주문 번호
     * @param model      Model 객체 (주문 정보)
     * @return 결제 페이지
     */
    @GetMapping("/{saleNumber}")
    public String getPaymentPage(@PathVariable("saleNumber") String saleNumber, Model model) {

        SaleInfoResponseDto saleInfo = paymentFacade.getPaymentInfo(saleNumber);

        model.addAttribute("sale", saleInfo);
        model.addAttribute("clientKey", tossProperties.getClientKey());
        model.addAttribute("customerKey", saleNumber);
        return "payment/checkout";
    }

    /**
     * 결제 성공 페이지.
     *
     * @param request 요청 객체
     * @param model   Model 객체
     * @return 결제 성공 페이지
     * @throws Exception 예외 처리
     */
    @GetMapping("/success")
    public String paymentRequest(HttpServletRequest request, Model model) throws Exception {

        log.info("requestURI = {}", request.getRequestURI());

        request.getParameterMap()
                .forEach((k, v) -> log.info("key = {}, value = {}", k, v));
        return "payment/success";
    }

    @PostMapping("/success")
    public String successPayment(@RequestBody PaymentRequestDto requestDto) {

        paymentFacade.createPayment(requestDto);

        log.info("SUCCESS requestDto = {}", requestDto);
        return "redirect:/";
    }

    /**
     * 결제 실패 페이지.
     *
     * @param request
     * @param model
     * @return
     * @throws Exception
     */

    @GetMapping("/fail")
    public String failPayment(HttpServletRequest request, Model model) throws Exception {

        log.info("requestURI = {}", request.getRequestURI());
        request.getParameterMap()
                .forEach((k, v) -> log.info("key = {}, value = {}", k, v));

        String failCode = request.getParameter("code");
        String failMessage = request.getParameter("message");

        model.addAttribute("code", failCode);
        model.addAttribute("message", failMessage);

        return "payment/fail";
    }

    @PostMapping("/fail")
    public String failPayment(@RequestBody PaymentRequestDto requestDto) {

        log.info("FAIL requestDto = {}", requestDto);

//        paymentFacade.failPayment(requestDto);
        return "redirect:/";
    }
}
