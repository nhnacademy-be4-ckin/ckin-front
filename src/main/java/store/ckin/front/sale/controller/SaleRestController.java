package store.ckin.front.sale.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.service.SaleService;

import java.util.List;

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

    /**
     * 각 도서에 적용시킬 수 있는 회원이 보유한 쿠폰 목록 조회 메서드입니다.
     *
     * @param memberId 회원 ID
     * @param bookId   주문할 도서 ID 리스트
     * @return 적용 가능한 모든 쿠폰 리스트
     */
    @GetMapping("/sale/coupon")
    public ResponseEntity<List<GetCouponResponseDto>> getCouponListByMemberId(@RequestParam("memberId") Long memberId,
                                                                              @RequestParam("bookId")
                                                                              List<Long> bookId) {

        List<GetCouponResponseDto> getCouponResponseList = saleService.requestCouponsByMemberId(memberId, bookId);
        return ResponseEntity.ok(getCouponResponseList);
    }
}
