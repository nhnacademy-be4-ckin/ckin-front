package store.ckin.front.sale.service;

import java.util.List;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SaleDetailResponseDto;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.dto.response.SaleWithBookResponseDto;

/**
 * 주문 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */


public interface SaleService {

    /**
     * 회원 ID와, 주문하려는 도서 ID를 통해 적용할 수 있는 모든 쿠폰을 조회합니다.
     *
     * @param memberId 주문하는 회원 ID
     * @param bookId   주문할 도서 ID 리스트
     * @return 적용할 수 있는 모든 쿠폰 DTO 리스트
     */
    List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId);

    /**
     * 주문 생성 요청을 합니다.
     *
     * @param requestDto 주문 생성 요청 DTO
     * @return 생성된 주문 ID
     */
    String createSale(SaleCreateRequestDto requestDto);

    /**
     * 모든 주문을 조회합니다.
     *
     * @param page 페이지 번호
     * @param size 페이지 사이즈
     * @return 주문 응답 DTO 리스트
     */
    PagedResponse<List<SaleResponseDto>> getSales(Integer page, Integer size);

    /**
     * 주문 정보를 조회합니다.
     *
     * @param saleId 주문 ID
     * @return 주문 상세 정보 응답 DTO
     */
    SaleDetailResponseDto getSaleDetail(Long saleId);

    /**
     * 주문 번호를 통해 주문과 관련된 도서 정보를 조회합니다.
     *
     * @param saleNumber 주문 번호 (UUID)
     * @return 주문과 관련된 도서 정보 응답 DTO
     */
    SaleWithBookResponseDto getSaleWithBooks(String saleNumber);

    /**
     * 주문 번호를 통해 결제 정보를 조회합니다.
     *
     * @param saleNumber 주문 번호
     * @return 결제 정보 응답 DTO
     */
    SaleInfoResponseDto getPaymentInfo(String saleNumber);


    /**
     * 회원의 주문 리스트를 조회합니다.
     *
     * @param memberId 회원 ID
     * @param page     페이지 번호
     * @param size     페이지 사이즈
     * @return 페이징 처리된 주문 응답 DTO 리스트
     */
    PagedResponse<List<SaleInfoResponseDto>> getSalesByMemberId(String memberId, Integer page, Integer size);

    /**
     * 주문 번호를 통해 주문 상세 정보를 조회합니다.
     *
     * @param saleNumber     주문 번호
     * @param ordererContact 주문자 전화번호
     * @return 주문 상세 정보 응답 DTO
     */
    SaleDetailResponseDto getSaleDetailBySaleNumber(String saleNumber, String ordererContact);
}
