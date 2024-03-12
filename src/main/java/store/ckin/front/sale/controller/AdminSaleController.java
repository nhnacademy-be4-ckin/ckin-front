package store.ckin.front.sale.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.facade.SaleFacade;

import javax.validation.constraints.Positive;
import java.util.List;

/**
 * 관리자 주문 Controller 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 03.
 */

@Slf4j
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
    public String getSales(@Positive @RequestParam(defaultValue = "1") Integer page,
                           @Positive @RequestParam(required = false, defaultValue = "10") Integer size,
                           Model model) {

        PagedResponse<List<SaleResponseDto>> sales = saleFacade.getSales(page - 1, size);

        log.debug("sales = {}", sales.getData());

        model.addAttribute("sales", sales);
        return "admin/sale/main";
    }


    /**
     * 주문 상세 정보를 조회하는 메서드.
     *
     * @param saleId 주문 ID
     * @param model  Model 객체
     * @return 주문 상세 페이지
     */
    @GetMapping("/{saleId}")
    public String getSaleDetail(@PathVariable("saleId") Long saleId, Model model) {
        SaleResponseDto sale = saleFacade.getSaleDetail(saleId);

        model.addAttribute("sale", sale);
        return "admin/sale/detail";
    }
}
