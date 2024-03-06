package store.ckin.front.sale.facade;

import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.service.BookService;
import store.ckin.front.booksale.dto.request.BookSaleCreateRequestDto;
import store.ckin.front.cart.dto.domain.CartItem;
import store.ckin.front.cart.service.CartService;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;
import store.ckin.front.member.domain.response.MemberPointResponseDto;
import store.ckin.front.member.service.MemberService;
import store.ckin.front.packaging.service.PackagingService;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SalePolicyResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 주문 퍼사드 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

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
    public Long createSale(SaleCreateRequestDto requestDto) {

        List<Long> couponIds = requestDto.getBookSaleList().stream()
                .map(BookSaleCreateRequestDto::getAppliedCouponId)
                .collect(Collectors.toList());

        couponService.updateCouponUsed(couponIds);

        return saleService.createSale(requestDto);
    }

    /**
     * 모든 주문을 조회하는 메서드입니다.
     *
     * @return 주문 응답 DTO 리스트
     */
    public List<SaleResponseDto> getSales() {
        return saleService.getSales();
    }

    /**
     * 회원의 포인트 정보를 조회하는 메서드입니다.
     *
     * @param memberId 회원 ID
     * @return 회원 포인트 응답 DTO
     */
    public MemberPointResponseDto getMemberPoint(String memberId) {
        return memberService.getMemberPoint(memberId);
    }

    /**
     * 주문 완료시 장바구니에 담긴 모든 상품을 삭제하는 메서드입니다.
     *
     * @param value 장바구니 쿠키 값
     */
    public void deleteCartItemAll(String value) {
        cartService.deleteCartItemAll(value);
    }
}
