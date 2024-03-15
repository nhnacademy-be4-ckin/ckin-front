package store.ckin.front.aop;

import java.util.Arrays;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;
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

    @Pointcut("@annotation(store.ckin.front.aop.Member)")
    public void memberPointcut() {

    }

    /**
     * 회원 정보를 Model에 추가하는 메서드입니다.
     *
     * @param pjp ProceedingJoinPoint
     * @throws Throwable pjp 실행 중 발생하는 예외
     */
    @Around("memberPointcut()")
    public Object addMemberInfo(ProceedingJoinPoint pjp) throws Throwable {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String memberId = authentication.getName();

        MemberMyPageResponseDto member = memberService.getMyPageInfo(memberId);
        Model model =
                (Model) Arrays.stream(pjp.getArgs())
                        .filter(Model.class::isInstance)
                        .findFirst()
                        .orElseThrow(() -> new IllegalArgumentException("Model Not Found !"));

        model.addAttribute("member", member);
        return pjp.proceed();
    }
}
