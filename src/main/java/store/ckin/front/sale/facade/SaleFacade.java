package store.ckin.front.sale.facade;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.service.BookService;
import store.ckin.front.booksale.dto.request.BookSaleCreateRequestDto;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.cart.service.CartService;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;
import store.ckin.front.member.service.MemberService;
import store.ckin.front.packaging.service.PackagingService;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SaleDetailResponseDto;
import store.ckin.front.sale.dto.response.SalePolicyResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.dto.response.SaleWithBookResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 주문 퍼사드 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Slf4j
@Service
@RequiredArgsConstructor
public class SaleFacade {


    private final PackagingService packagingService;

    private final DeliveryPolicyService deliveryPolicyService;

    private final BookService bookService;

    private final SaleService saleService;

    private final MemberService memberService;

    private final CartService cartService;

    private final CouponService couponService;

    /**
     * 주문 페이지에서 필요한 정책(배송, 포장) 목록을 조회하는 메서드입니다.
     *
     * @return 정책 응답 DTO
     */
    public SalePolicyResponseDto getPolicyList() {
        return SalePolicyResponseDto.builder()
                .deliveryPolicy(deliveryPolicyService.getActiveDeliveryPolicy())
                .packagingPolicies(packagingService.getPackagingPolicies())
                .build();
    }

    /**
     * 주문 페이지에서 필요한 주문할 책 정보 목록을 조회하는 메서드입니다.
     *
     * @param cartItems 장바구니 도서 리스트
     * @return 책 정보 목록
     */
    public List<BookExtractionResponseDto> getBookSaleList(List<CartItem> cartItems) {

        List<Long> bookIds = cartItems.stream()
                .map(CartItem::getId)
                .collect(Collectors.toList());

        List<BookExtractionResponseDto> bookSaleList = bookService.getBookSaleList(bookIds);

        bookSaleList.forEach(
                book -> cartItems.stream()
                        .filter(cartItem -> cartItem.getId() == book.getBookId())
                        .forEach(cartItem -> book.updateQuantity(cartItem.getQuantity())));

        return bookSaleList;
    }

    /**
     * 주문을 생성하는 메서드입니다.
     *
     * @param requestDto 주문 생성 요청 DTO
     * @return 주문 ID
     */
    public String createSale(SaleCreateRequestDto requestDto) {

        List<Long> couponIds = requestDto.getBookSaleList().stream()
                .map(BookSaleCreateRequestDto::getAppliedCouponId)
                .filter(appliedCouponId -> appliedCouponId != 0)
                .collect(Collectors.toList());

        log.debug("couponIds = {}", couponIds);

        if (!couponIds.isEmpty()) {
            couponService.updateCouponUsed(couponIds);
        }

        return saleService.createSale(requestDto);
    }

    /**
     * 모든 주문을 조회하는 메서드입니다.
     *
     * @param page 페이지 번호
     * @param size 페이지 사이즈
     * @return 주문 응답 DTO 리스트
     */
    public PagedResponse<List<SaleResponseDto>> getSales(Integer page, Integer size) {
        return saleService.getSales(page, size);
    }

    /**
     * 주문 완료시 장바구니에 담긴 모든 상품을 삭제하는 메서드입니다.
     *
     * @param value 장바구니 쿠키 값
     */
    public void deleteCartItemAll(String value) {
        cartService.deleteCartItemAll(value);
    }

    /**
     * 주문 상세 정보를 조회하는 메서드입니다.
     *
     * @param saleId 주문 ID
     * @return 주문 상세 정보 응답 DTO
     */
    public SaleDetailResponseDto getSaleDetail(Long saleId) {
        return saleService.getSaleDetail(saleId);
    }

    /**
     * 주문 번호를 통해 주문과 관련된 도서 정보를 조회합니다.
     *
     * @param saleNumber 주문 번호 (UUID)
     * @return 주문과 관련된 도서 정보 응답 DTO
     */
    public SaleWithBookResponseDto getSaleWithBooks(String saleNumber) {
        return saleService.getSaleWithBooks(saleNumber);
    }

    /**
     * 장바구니에 담긴 상품을 조회하는 메서드입니다.
     *
     * @param cartId 장바구니 ID
     * @return 장바구니 도서 리스트
     */
    public List<CartItem> readCartItems(String cartId) {
        return cartService.readCartItems(cartId);
    }

    /**
     * 주문 번호를 통해 주문의 상세 정보를 조회하는 메서드입니다.
     *
     * @param saleNumber     주문 번호
     * @param ordererContact 주문자 연락처
     * @return 주문 상세 정보 응답 DTO
     */
    public SaleDetailResponseDto getGuestSaleDetailBySaleNumber(String saleNumber, String ordererContact) {
        return saleService.getGuestSaleDetailBySaleNumber(saleNumber, ordererContact);
    }
}
