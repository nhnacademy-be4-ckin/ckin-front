package store.ckin.front.payment.controller;

import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.config.properties.TossProperties;
import store.ckin.front.payment.dto.response.PaymentSuccessResponseDto;
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
     * 결제 승인 페이지 요청 메서드입니다.
     *
     * @return 결제 승인 페이지
     */
    @GetMapping("/approve")
    public String paymentRequest() {
        return "payment/approve";
    }


    /**
     * 결제 실패 페이지 요청 메서드입니다.
     *
     * @param request 요청 객체
     * @return 결제 실패 페이지
     */

    @GetMapping("/fail")
    public String failPayment(HttpServletRequest request) {

        String failCode = request.getParameter("code");
        String orderId = request.getParameter("orderId");

        if (failCode.equals("DUPLICATED_ORDER_ID")) {
            return "redirect:/";
        }

        return "redirect:/payment/" + orderId;
    }

    /**
     * 결제 완료 페이지 요청 메서드입니다.
     *
     * @param payment 결제 완료 응답 DTO
     * @param model   Model 객체
     * @return 결제 완료 페이지
     */
    @GetMapping("/success")
    public String successPayment(@ModelAttribute PaymentSuccessResponseDto payment, Model model) {

        log.debug("payment = {}", payment);

        model.addAttribute("payment", payment);
        return "payment/success";
    }
}
