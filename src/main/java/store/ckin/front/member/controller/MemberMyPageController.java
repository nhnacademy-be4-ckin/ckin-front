package store.ckin.front.member.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.aop.Member;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.review.dto.response.MyPageReviewResponseDto;
import store.ckin.front.review.service.ReviewService;
import store.ckin.front.pointhistory.dto.response.PointHistoryResponseDto;
import store.ckin.front.pointhistory.service.PointHistoryService;
import store.ckin.front.sale.dto.response.SaleDetailResponseDto;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 회원 - 마이페이지 컨트롤러 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 14.
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/member/mypage")
public class MemberMyPageController {

    private final SaleService saleService;

    private final CouponService couponService;

    private final ReviewService reviewService;

    private final PointHistoryService pointHistoryService;


    /**
     * 회원 마이페이지 메인 화면을 요청하는 메서드입니다.
     *
     * @param pageable 페이지 정보
     * @param model    Model 객체
     * @return 회원 마이페이지 메인 화면
     */
    @Member
    @GetMapping("/order-list")
    public String getMemberOrderList(@PageableDefault Pageable pageable,
                                     Model model) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PagedResponse<List<SaleInfoResponseDto>> saleList
                = saleService.getSalesByMemberId(authentication.getName(), pageable.getPageNumber(),
                pageable.getPageSize());

        model.addAttribute("saleList", saleList.getData());
        model.addAttribute("pageInfo", saleList.getPageInfo());
        return "member/mypage/order-list";
    }

    /**
     * 회원 주문 상세 화면을 요청하는 메서드입니다.
     *
     * @param saleNumber 주문 번호
     * @param model      Model 객체
     * @return 회원 주문 상세 화면
     */
    @Member
    @GetMapping("/order/{saleNumber}")
    public String getMemberOrderDetail(@PathVariable String saleNumber,
                                       Model model) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String memberId = authentication.getName();
        SaleDetailResponseDto saleDetail =
                saleService.getMemberSaleDetailBySaleNumber(saleNumber, memberId);

        model.addAttribute("saleDetail", saleDetail);
        return "member/mypage/order-detail";
    }


    /**
     * 회원 쿠폰 목록 조회 메서드입니다.
     *
     * @param pageable 페이지 정보
     * @param model    Model 객체
     * @return 회원 쿠폰 목록 화면
     */
    @Member
    @GetMapping("/coupon")
    public String getMemberCoupon(@PageableDefault(page = 0, size = 6) Pageable pageable,
                                  Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PageDto<GetCouponResponseDto> couponResponseDtoPageDto
                = couponService.getUnUsedCouponByMember(pageable, Long.valueOf(authentication.getName()));

        model.addAttribute("couponPage", couponResponseDtoPageDto);
        return "member/coupon/main";
    }

    /**
     * 회원 포인트 내역 조회 메서드입니다.
     *
     * @param pageable 페이지 정보
     * @param model    Model 객체
     * @return 회원 포인트 내역 화면
     */
    @Member
    @GetMapping("/point-history")
    public String getMemberPointHistory(@PageableDefault Pageable pageable,
                                        Model model) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PagedResponse<List<PointHistoryResponseDto>> pointHistoryList =
                pointHistoryService.getPointHistoryList(
                        authentication.getName(),
                        pageable.getPageNumber(),
                        pageable.getPageSize());

        model.addAttribute("pointHistoryList", pointHistoryList.getData());
        model.addAttribute("pageInfo", pointHistoryList.getPageInfo());
        return "member/mypage/point-history";
    }
    @Member
    @GetMapping("/review")
    public String getMyReviews(@PageableDefault(page = 0, size = 5) Pageable pageable,
                               Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PageDto<MyPageReviewResponseDto> myPageReviewResponseDtoPageDto
                = reviewService.getMyPageReviewResponseDto(pageable, authentication.getName());

        model.addAttribute("reviewPage", myPageReviewResponseDtoPageDto);

        return "member/mypage/review/main";

    }



}
