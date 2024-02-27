package store.ckin.front.sale.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 주문 RestController 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@RestController
@RequiredArgsConstructor
public class SaleRestController {

    private final SaleService saleService;

    @GetMapping("/sale/coupon")
    public ResponseEntity<List<GetCouponResponseDto>> getCouponListByMemberId(@RequestParam("memberId") Long memberId,
                                                                              @RequestParam("bookId") List<Long> bookId) {

        List<GetCouponResponseDto> getCouponResponseList = saleService.requestCouponsByMemberId(memberId, bookId);
        return ResponseEntity.ok(getCouponResponseList);
    }
}
