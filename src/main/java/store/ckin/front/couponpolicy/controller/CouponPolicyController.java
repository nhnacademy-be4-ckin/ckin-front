package store.ckin.front.couponpolicy.controller;

import groovy.util.logging.Slf4j;
import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;

/**
 * 쿠폰 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 이가은
 * @version 2024. 02. 08.
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/coupon")
public class CouponPolicyController {

    private final CouponPolicyService couponPolicyService;

    /**
     * 쿠폰 정책 목록을 가져오는 메서드 입니다.
     *
     * @author : gaeun
     * @version : 2024. 02. 22.
     */
    @GetMapping
    public String getCouponPolicies(Model model) {
        List<GetCouponPolicyResponseDto> couponPolicies = couponPolicyService.getCouponPolicies();

        model.addAttribute("couponPolicies", couponPolicies);
        return "admin/policy/coupon/main";
    }

    /**
     * 쿠폰 정책을 등록하는 메서드 입니다.
     *
     * @author : gaeun
     * @version : 2024. 02. 22.
     */
    @PostMapping
    public String createCouponPolicy(@Valid CreateCouponPolicyRequestDto couponPolicyRequestDto) {

        couponPolicyService.createCouponPolicy(couponPolicyRequestDto);

        return "redirect:/admin/policy/coupon";
    }

}
