package store.ckin.front.coupon.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.coupon.service.CouponService;

/**
 * CouponRestController
 *
 * @author : 이가은
 * @version : 2024. 03. 14
 */
@RestController
@RequiredArgsConstructor
public class CouponRestController {
    private final CouponService couponService;

    /**
     * 쿠폰을 발급받는 메서드 입니다.
     *
     * @param couponTemplateId
     * @return true : 정상 발급
     * false : 이미 발급된 쿠폰
     */
    @PostMapping("/coupon/{couponTemplateId}")
    public Boolean giveCoupon(@PathVariable("couponTemplateId") Long couponTemplateId) {

        return couponService.createCouponByIds(couponTemplateId);
    }

    /**
     * Welcome 쿠폰을 발급받는 메서드 입니다.
     *
     * @return 성공여부
     */
    @PostMapping("/coupon/welcome")
    public Boolean postWelcomeCoupon() {
        Authentication authentication = SecurityContextHolder.createEmptyContext().getAuthentication();
        Long memberId = Long.valueOf(authentication.getName());

         Boolean isSuccess = couponService.postWelcomeCoupon(memberId);
        return isSuccess;
    }
}
