package store.ckin.front.couponpolicy.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;

import java.util.List;

/**
 * 포인트 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/coupon")
public class CouponPolicyController {

    private final CouponPolicyService pointPolicyService;
    @GetMapping
    public String getPointPolicies(@PageableDefault(size = 5) Pageable pageable,
                                   Model model) {
        List<GetCouponPolicyResponseDto> couponPolicies = pointPolicyService.getCouponPolicies();

        model.addAttribute("couponPolicies", couponPolicies);
        return "admin/coupon-policy/main";
    }

}
