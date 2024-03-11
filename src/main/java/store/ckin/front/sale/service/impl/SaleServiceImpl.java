package store.ckin.front.sale.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.adapter.SaleAdapter;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.dto.response.SaleWithBookResponseDto;
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

    /**
     * {@inheritDoc}
     *
     * @param memberId 주문하는 회원 ID
     * @param bookId   주문할 도서 ID 리스트
     * @return 적용할 수 있는 모든 쿠폰 DTO 리스트
     */
    @Override
    public List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId) {
        return saleAdapter.requestCouponsByMemberId(memberId, bookId);
    }

    /**
     * {@inheritDoc}
     *
     * @param requestDto 주문 생성 요청 DTO
     * @return 생성된 주문 ID
     */
    @Override
    public Long createSale(SaleCreateRequestDto requestDto) {
        return saleAdapter.requestCreateSale(requestDto);
    }

    /**
     * {@inheritDoc}
     *
     * @return 주문 응답 DTO 리스트
     */
    @Override
    public PagedResponse<List<SaleResponseDto>> getSales(Integer page, Integer size) {
        return saleAdapter.requestGetSales(page, size);
    }

    /**
     * {@inheritDoc}
     *
     * @param saleId 주문 ID
     * @return 주문 응답 DTO
     */
    @Override
    public SaleResponseDto getSaleDetail(Long saleId) {
        return saleAdapter.requestGetSaleDetail(saleId);
    }

    /**
     * {@inheritDoc}
     *
     * @param saleId 주문 ID
     * @return 주문과 관련된 도서 정보 응답 DTO
     */
    @Override
    public SaleWithBookResponseDto getSaleWithBooks(Long saleId) {
        return saleAdapter.requestGetSaleWithBooks(saleId);
    }

    /**
     * {@inheritDoc}
     *
     * @param saleNumber 주문 번호 (UUID)
     * @return 결제 정보 응답 DTO
     */
    @Override
    public SaleInfoResponseDto getPaymentInfo(String saleNumber) {
        return saleAdapter.requestGetPaymentInfo(saleNumber);
    }
}
