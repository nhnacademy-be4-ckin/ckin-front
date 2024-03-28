package store.ckin.front.aop;

import java.util.Arrays;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
import store.ckin.front.coupon.dto.response.CouponCountResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.service.MemberService;

/**
 * 회원 전용 메서드에 사용하는 AOP 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 14.
 */

@Slf4j
@Aspect
@Component
@RequiredArgsConstructor
public class MemberAspect {

    private final MemberService memberService;

    private final CouponService couponService;

    @Pointcut("@annotation(store.ckin.front.aop.Member)")
    public void memberPointcut() {

    }

    /**
     * 회원 정보를 Model 객체에 추가하는 메서드입니다.
     *
     * @param jp JoinPoint 객체
     */
    @AfterReturning(pointcut = "memberPointcut()")
    public void addMemberInfo(JoinPoint jp) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String memberId = authentication.getName();

        log.debug("MemberAspect addMemberInfo memberId = {}", memberId);

        if ("anonymousUser".equals(memberId)) {
            return;
        }

        MemberMyPageResponseDto member = memberService.getMyPageInfo(memberId);

        Model model = (Model) Arrays.stream(jp.getArgs())
                .filter(Model.class::isInstance)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Model 객체가 없습니다."));

        model.addAttribute("member", member);

        CouponCountResponseDto countCouponResponse = couponService.getCountCouponByMember(Long.parseLong(memberId));

        model.addAttribute("countCoupon", countCouponResponse.getCountCoupon());
    }
}