package store.ckin.front.sale.adapter;

import java.util.List;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.request.SaleDeliveryUpdateRequestDto;
import store.ckin.front.sale.dto.response.SaleCheckResponseDto;
import store.ckin.front.sale.dto.response.SaleDetailResponseDto;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.dto.response.SaleWithBookResponseDto;

/**
 * 주문 어댑터 인터페이스.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

public interface SaleAdapter {

    /**
     * 회원 ID와, 주문하려는 도서 ID를 통해 적용할 수 있는 모든 쿠폰을 조회합니다.
     *
     * @param memberId 주문하는 회원 ID
     * @param bookId   주문할 도서 ID 리스트
     * @return 적용 가능한 모든 쿠폰 리스트
     */
    List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId);

    /**
     * 주문 생성 요청을 합니다.
     *
     * @param requestDto 주문 생성 요청 DTO
     * @return 생성된 주문 ID
     */
    String requestCreateSale(SaleCreateRequestDto requestDto);

    /**
     * 모든 주문을 조회합니다.
     *
     * @param page 페이지 번호
     * @param size 페이지 사이즈
     * @return 주문 응답 DTO 리스트
     */
    PagedResponse<List<SaleResponseDto>> requestGetSales(Integer page, Integer size);

    /**
     * 주문 ID를 통해 주문 정보를 조회합니다.
     *
     * @param saleId 조회할 주문 ID
     * @return 주문 응답 DTO
     */
    SaleDetailResponseDto requestGetSaleDetail(Long saleId);

    /**
     * 주문 번호를 통해 주문과 관련된 도서 정보를 조회합니다.
     *
     * @param saleNumber 조회할 주문 번호
     * @return 주문과 관련된 도서 정보 응답 DTO
     */
    SaleWithBookResponseDto requestGetSaleWithBooks(String saleNumber);

    /**
     * 주문 번호를 통해 결제 정보를 조회합니다.
     *
     * @param saleNumber 조회할 주문 번호 (UUID)
     * @return 결제 정보 응답 DTO
     */
    SaleInfoResponseDto requestGetPaymentInfo(String saleNumber);

    /**
     * 회원 ID를 API 서버로 보내 해당 회원이 주문한 모든 주문 내역을 조회합니다.
     *
     * @param memberId 회원 ID
     * @param page     페이지 번호
     * @param size     페이지 사이즈
     * @return 주문 응답 DTO 리스트
     */
    PagedResponse<List<SaleInfoResponseDto>> requestGetSalesByMemberId(String memberId, Integer page, Integer size);


    /**
     * 비회원의 주문 번호를 통해 주문 상세 정보를 요청합니다..
     *
     * @param saleNumber     주문 번호
     * @param ordererContact 주문자 전화번호
     * @return 주문 상세 정보 응답 DTO
     */
    SaleDetailResponseDto requestGetGuestSaleDetailBySaleNumber(String saleNumber, String ordererContact);

    /**
     * 회원의 주문 번호를 통해 주문 상세 정보를 조회합니다.
     *
     * @param saleNumber 주문 번호
     * @param memberId   회원 ID
     * @return 주문 상세 정보 응답 DTO
     */
    SaleDetailResponseDto requestGetMemberSaleDetailBySaleNumber(String saleNumber, String memberId);

    /**
     * 주문 배송 상태를 업데이트합니다.
     *
     * @param saleId         주문 ID
     * @param deliveryStatus 배송 상태
     */
    void requestUpdateDeliveryStatus(Long saleId, SaleDeliveryUpdateRequestDto deliveryStatus);

    /**
     * 주문 취소를 요청합니다.
     *
     * @param saleId 주문 ID
     */
    void requestCancelSale(Long saleId);

    /**
     * 회원 ID와 도서 ID를 통해 주문 리스트에 해당 주문이 존재하는지 확인하는 메서드입니다.
     *
     * @param memberId 회원 ID
     * @param bookId   도서 ID
     * @return 주문 존재 여부 DTO
     */
    SaleCheckResponseDto checkSaleByMemberIdAndBookId(Long memberId, String bookId);
}
