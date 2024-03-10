package store.ckin.front.payment.controller;

import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.config.properties.TossProperties;
import store.ckin.front.payment.facde.PaymentFacade;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;

/**
 * 결제 컨트롤러 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 07.
 */

@Controller
@RequiredArgsConstructor
@RequestMapping("/payment")
public class PaymentController {

    private final PaymentFacade paymentFacade;

    private final TossProperties tossProperties;

    @GetMapping("/{saleNumber}")
    public String getPaymentPage(@PathVariable("saleNumber") String saleNumber, Model model) {

        SaleInfoResponseDto saleInfo = paymentFacade.getPaymentInfo(saleNumber);

        model.addAttribute("sale", saleInfo);
        model.addAttribute("clientKey", tossProperties.getClientKey());
        return "payment/checkout";
    }

    @GetMapping("/success")
    public String paymentRequest(HttpServletRequest request, Model model) throws Exception {
        return "payment/success";
    }


    @GetMapping("/fail")
    public String failPayment(HttpServletRequest request, Model model) throws Exception {
        String failCode = request.getParameter("code");
        String failMessage = request.getParameter("message");

        model.addAttribute("code", failCode);
        model.addAttribute("message", failMessage);

        return "payment/fail";
    }


}
