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
     * 결제 성공 페이지 요청 메서드입니다.
     *
     * @param request 요청 객체
     * @param model   Model 객체
     * @return 결제 성공 페이지
     */
    @GetMapping("/success")
    public String paymentRequest(HttpServletRequest request, Model model) {

        request.getParameterMap()
                .forEach((k, v) -> log.debug("key = {}, value = {}", k, v));

        return "payment/success";
    }



    /**
     * 결제 실패 페이지 요청 메서드입니다.
     *
     * @param request 요청 객체
     * @param model   Model 객체
     * @return 결제 실패 페이지
     */

    @GetMapping("/fail")
    public String failPayment(HttpServletRequest request, Model model) {

        String failCode = request.getParameter("code");
        String orderId = request.getParameter("orderId");

        if (failCode.equals("DUPLICATED_ORDER_ID")) {
            return "redirect:/";
        }

        return "redirect:/payment/" + orderId;
    }
}
