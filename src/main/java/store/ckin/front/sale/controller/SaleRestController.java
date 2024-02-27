package store.ckin.front.sale.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.adapter.SaleAdapter;

/**
 * 주문 RestController 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Slf4j
@RestController
@RequiredArgsConstructor
public class SaleRestController {

    private final SaleAdapter saleAdapter;

    @GetMapping("/sale/coupon/member/{memberId}")
    public ResponseEntity<List<GetCouponResponseDto>> getCouponListByMemberId(@PathVariable("memberId") Long id) {
        log.info("memberID = {}", id);

        List<GetCouponResponseDto> getCouponResponseDtos = saleAdapter.requestCouponsByMemberId(id);
        log.info("dto = {}", getCouponResponseDtos);

        return ResponseEntity.ok(getCouponResponseDtos);
    }
}
