package store.ckin.front.sale.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.sale.dto.SalePolicyDto;
import store.ckin.front.sale.facade.SaleFacade;

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


    private final SaleFacade saleFacade;

    @GetMapping
    public String getSaleForm(Model model) {

        SalePolicyDto policyList = saleFacade.getPolicyList();

        model.addAttribute("policyList", policyList);
        return "sale/main";
    }

}
