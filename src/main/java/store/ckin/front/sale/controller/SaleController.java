package store.ckin.front.sale.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 주문 컨트롤러 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 25.
 */

@Controller
@RequestMapping("/sale")
@RequiredArgsConstructor
public class SaleController {

    @GetMapping
    public String getSaleForm() {
        return "sale/main";
    }

}
