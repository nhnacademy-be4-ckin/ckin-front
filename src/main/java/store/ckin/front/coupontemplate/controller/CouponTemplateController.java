package store.ckin.front.coupontemplate.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;


/**
 * CouponTemplateController
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

    /**
     * 쿠폰 템플릿 목록을 가져오는 메서드 입니다.
     *
     * @param pageable 페이지 정보
     * @param typeId   쿠폰 템플릿 타입 ID
     * @return 쿠폰 템플릿 목록 페이지로 이동
     */
    @GetMapping("/{typeId}")
    public String getCouponTemplate(@PageableDefault(page = 0, size = 10) Pageable pageable,
                                    @PathVariable("typeId") Long typeId,
                                    Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList =
                couponTemplateService.getCouponTemplateList(pageable, typeId);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        couponTemplateList.getContent().stream().forEach(getCouponTemplateResponseDto -> System.out.println(getCouponTemplateResponseDto));

        model.addAttribute("pagination", couponTemplateList);
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        switch (typeId.intValue()) {
            case 1:
                return "admin/coupon/template/birth";
            case 2:
                return "admin/coupon/template/book";
            default:
                return "admin/coupon/template/category";
        }
    }

    /**
     * 쿠폰 템플릿을 생성하는 메서드 입니다.
     *
     * @param policyId 쿠폰 정책 ID
     * @param typeId   쿠폰 템플릿 타입 ID
     * @param value    템플릿 별 입력될 값
     * @return 쿠폰 템플릿 목록 페이지로 리다이렉트
     */
    @PostMapping("/{typeId}")
    public String createCouponTemplate(@RequestParam("policyId") Long policyId,
                                       @PathVariable("typeId") Long typeId,
                                       @RequestParam("value") Long value,
                                       @RequestParam(name = "duration", required = false) Integer duration,
                                       @RequestParam(name = "expirationDate", required = false)
                                       @DateTimeFormat(pattern = "yyyy-MM-dd") String expirationDate) {
        log.debug("duration: {}", duration);
        log.debug("expiration: {}", expirationDate);

        switch (typeId.intValue()) {
            case 1:
                couponTemplateService.createCouponTemplate(policyId, null, null, typeId, 0L, duration, Date.valueOf(expirationDate));
                return "redirect:/admin/coupon/template/1";
            case 2:
                couponTemplateService.createCouponTemplate(policyId, value, null, typeId, 0L, duration, Date.valueOf(expirationDate));
                return "redirect:/admin/coupon/template/2";
            default:
                couponTemplateService.createCouponTemplate(policyId, null, value, typeId, 0L, duration, Date.valueOf(expirationDate));
                return "redirect:/admin/coupon/template/3";
        }
    }

    /**
     * 쿠폰 템플릿을 삭제하는 메서드 입니다.
     *
     * @param templateId 쿠폰 템플릿 ID
     * @param typeId     쿠폰 템플릿 타입 ID
     * @return 쿠폰 템플릿 목록 페이지로 이동
     */
    @PostMapping("/{typeId}/{templateId}")
    public String deleteCouponTemplate(@PathVariable("templateId") Long templateId,
                                       @PathVariable("typeId") Long typeId) {
        couponTemplateService.deleteCouponTemplate(templateId);

        return "redirect:/admin/coupon/template/" + typeId;
    }

}

