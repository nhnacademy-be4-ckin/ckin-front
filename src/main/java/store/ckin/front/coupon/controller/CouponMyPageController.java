package store.ckin.front.coupon.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * CouponMyPageController
 *
 * @author : gaeun
 * @version : 2024. 03. 15
 */

@Controller
@RequiredArgsConstructor
@RequestMapping("/myPage/coupon")
public class CouponMyPageController {
    private final CouponService couponService;

    @GetMapping
    public String getMemberCoupon(@PageableDefault(page = 0, size = 6) Pageable pageable,
                                  Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PageDto<GetCouponResponseDto> couponResponseDtoPageDto
                = couponService.getUnUsedCouponByMember(pageable, Long.valueOf(authentication.getName()));
        System.out.println(couponResponseDtoPageDto);
        model.addAttribute("couponPage", couponResponseDtoPageDto);
        return "member/coupon/main";
    }
}
