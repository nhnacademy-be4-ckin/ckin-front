package store.ckin.front.sale.service;

import java.util.List;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;

/**
 * 주문 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */


public interface SaleService {

    List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId);

    Long createSale(SaleCreateRequestDto requestDto);
}
