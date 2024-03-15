package store.ckin.front.sale.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.sale.dto.response.SaleDetailResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.facade.SaleFacade;

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
    public String getSales(@PageableDefault Pageable pageable,
                           Model model) {

        PagedResponse<List<SaleResponseDto>> saleList
                = saleFacade.getSales(pageable.getPageNumber(), pageable.getPageSize());

        model.addAttribute("saleList", saleList.getData());
        model.addAttribute("pageInfo", saleList.getPageInfo());
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
        SaleDetailResponseDto saleDetail = saleFacade.getSaleDetail(saleId);

        log.debug("saleDetail = {}", saleDetail);

        model.addAttribute("saleDetail", saleDetail);
        return "admin/sale/detail";
    }
}
