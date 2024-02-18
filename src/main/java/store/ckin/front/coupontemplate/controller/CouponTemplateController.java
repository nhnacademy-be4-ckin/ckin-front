package store.ckin.front.coupontemplate.controller;

import groovy.util.logging.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

import javax.validation.Valid;
import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/coupon/template")
public class CouponTemplateController {

    private final CouponTemplateService couponTemplateService;
    private final CouponPolicyService couponPolicyService;

    @GetMapping("/birth")
    public String getBirthCouponTemplate(Pageable pageable,
                                    Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList = couponTemplateService.getBirthCouponTemplateList(pageable);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        model.addAttribute("isPrevious", couponTemplateList.getNumber() > 0);
        model.addAttribute("isNext", couponTemplateList.getNumber() < couponTemplateList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponTemplateList.getTotalPages());
        model.addAttribute("currentPage", couponTemplateList.getNumber());
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        return "admin/coupon/birth-template";
    }

    @GetMapping("/book")
    public String getBookCouponTemplate(Pageable pageable,
                                         Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList = couponTemplateService.getBookCouponTemplateList(pageable);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        model.addAttribute("isPrevious", couponTemplateList.getNumber() > 0);
        model.addAttribute("isNext", couponTemplateList.getNumber() < couponTemplateList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponTemplateList.getTotalPages());
        model.addAttribute("currentPage", couponTemplateList.getNumber());
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        return "admin/coupon/book-template";
    }

    @GetMapping("/category")
    public String getCategoryCouponTemplate(Pageable pageable,
                                        Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList = couponTemplateService.getCategoryCouponTemplateList(pageable);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        model.addAttribute("isPrevious", couponTemplateList.getNumber() > 0);
        model.addAttribute("isNext", couponTemplateList.getNumber() < couponTemplateList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponTemplateList.getTotalPages());
        model.addAttribute("currentPage", couponTemplateList.getNumber());
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        return "admin/coupon/category-template";
    }


    @PostMapping("/birth")
    public String createCouponPolicy(@RequestParam("policyId") Long policyId,
                                     @RequestParam("targetMonth") Long targetMonth) {
        CreateCouponTemplateRequestDto couponTemplateRequestDto = new CreateCouponTemplateRequestDto(policyId, null, null, targetMonth + "월 생일 쿠폰", 0L);
        couponTemplateService.createCouponTemplate(couponTemplateRequestDto);

        return "redirect:/admin/coupon/template/birth";
    }

}

