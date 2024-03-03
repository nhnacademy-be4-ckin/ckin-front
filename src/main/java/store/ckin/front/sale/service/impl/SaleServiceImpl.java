package store.ckin.front.sale.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.adapter.SaleAdapter;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 주문 서비스 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */
@Service
@RequiredArgsConstructor
public class SaleServiceImpl implements SaleService {

    private final SaleAdapter saleAdapter;

    @Override
    public List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId) {
        return saleAdapter.requestCouponsByMemberId(memberId, bookId);
    }

    @Override
    public Long createSale(SaleCreateRequestDto requestDto) {
        return saleAdapter.requestCreateSale(requestDto);
    }

    @Override
    public List<SaleResponseDto> getSales() {
        return saleAdapter.requestGetSales();
    }
}
