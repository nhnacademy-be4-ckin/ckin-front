package store.ckin.front.sale.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.facade.SaleFacade;

/**
 * 관리자 주문 Controller 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 03.
 */

@Controller
@RequestMapping("/admin/sale")
@RequiredArgsConstructor
public class AdminSaleController {

    private final SaleFacade saleFacade;

    /**
     * 모든 주문 목록을 조회하는 메서드.
     *
     * @param model Model 객체
     * @return 주문 목록 페이지
     */
    @GetMapping
    public String getSales(Model model) {

        List<SaleResponseDto> sales = saleFacade.getSales();

        model.addAttribute("sales", sales);
        return "admin/sale/main";
    }
}
