package store.ckin.front.couponpolicy.controller;

import groovy.util.logging.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;

import javax.validation.Valid;
import java.util.List;

/**
 * 포인트 정책 페이지를 호출하는 컨트롤러입니다.
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
    @GetMapping
    public String getCouponPolicies(Model model) {
        List<GetCouponPolicyResponseDto> couponPolicies = couponPolicyService.getCouponPolicies();

        model.addAttribute("couponPolicies", couponPolicies);
        return "admin/coupon-policy/main";
    }

    @PostMapping
    public String createCouponPolicy(@Valid CreateCouponPolicyRequestDto couponPolicyRequestDto) {

        couponPolicyService.createCouponPolicy(couponPolicyRequestDto);

        return "redirect:/admin/policy/coupon";
    }

}
