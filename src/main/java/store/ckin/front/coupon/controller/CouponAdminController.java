package store.ckin.front.coupon.controller;

import groovy.util.logging.Slf4j;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * 포인트 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/coupon")
public class CouponAdminController {

    private final CouponService couponService;

    /**
     * 쿠폰 목록을 가져오는 메서드 입니다.
     *
     * @param pageable
     * @param couponId 쿠폰 아이디를 가지는 경우 해당 쿠폰 아이디만 보여줍니다.
     * @return 쿠폰 목록 페이지로 이동합니다.
     */
    @GetMapping
    public String getCouponAllList(Model model,
                                   @PageableDefault(page = 0, size = 20) Pageable pageable,
                                   @RequestParam(required = false, name = "id") Long couponId) {
        PageDto<GetCouponResponseDto> couponAllList;

        if (Objects.isNull(couponId)) {
            couponAllList = couponService.getCouponAllList(pageable);
        } else {
            GetCouponResponseDto responseDto = couponService.getCouponByCouponId(couponId);
            couponAllList = new PageDto<>(List.of(responseDto), 0, 1, 1, 1);
        }

        model.addAttribute("pagination", couponAllList);
        model.addAttribute("couponAllList", couponAllList.getContent());
        return "admin/coupon/main";
    }

    /**
     * 쿠폰 목록을 타입별로 가져오는 메서드 입니다.
     *
     * @param pageable
     * @param typeId   쿠폰 템플릿 타입 아이디
     * @return 쿠폰 목록 페이지로 이동합니다.
     */
    @GetMapping("/{typeId}")
    public String getCouponList(Model model,
                                @PageableDefault(page = 0, size = 5) Pageable pageable,
                                @PathVariable("typeId") Long typeId) {
        PageDto<GetCouponResponseDto> couponList = couponService.getCouponList(pageable, typeId);

        model.addAttribute("pagination", couponList);
        model.addAttribute("couponAllList", couponList.getContent());
        return "admin/coupon/main";
    }

    /**
     * 쿠폰 목록을 멤버별로 가져오는 메서드 입니다.
     *
     * @param pageable
     * @param memberId 회원 ID
     * @return 쿠폰 목록 페이지로 이동합니다.
     */
    @GetMapping("/member")
    public String getMemberCouponList(Model model,
                                      @PageableDefault(page = 0, size = 5) Pageable pageable,
                                      @RequestParam(required = false, name = "id") Long memberId) {
        PageDto<GetCouponResponseDto> couponList;

        if (Objects.isNull(memberId)) {
            couponList = couponService.getCouponAllList(pageable);
        } else {
            couponList = couponService.getCouponByMemberId(pageable, memberId);
        }
        model.addAttribute("pagination", couponList);
        model.addAttribute("couponAllList", couponList.getContent());
        return "admin/coupon/main";
    }


}
