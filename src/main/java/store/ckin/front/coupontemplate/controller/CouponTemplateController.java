package store.ckin.front.coupontemplate.controller;

import java.util.List;
import java.util.Objects;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateInfoDto;
import store.ckin.front.coupontemplate.dto.request.UpdateCouponTemplateStatusDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;


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

        model.addAttribute("pagination", couponTemplateList);
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);

        switch (typeId.intValue()) {
            case 1:
                return "admin/coupon/template/birth";
            case 2:
                return "admin/coupon/template/book";
            case 3:
                return "admin/coupon/template/category";
            default:
                return "admin/coupon/template/welcome";
        }
    }

    /**
     * 쿠폰 템플릿을 생성하는 메서드 입니다.
     *
     * @param couponTemplateInfoDto 쿠폰 템플릿을 생성할 정보
     * @return 쿠폰 템플릿 목록 페이지로 리다이렉트
     */
    @PostMapping("/{typeId}")
    public String createCouponTemplate(@Valid CreateCouponTemplateInfoDto couponTemplateInfoDto) {

        log.debug(couponTemplateInfoDto.toString());
        couponTemplateService.createCouponTemplate(couponTemplateInfoDto);

        return "redirect:/admin/coupon/template/" + couponTemplateInfoDto.getTypeId();
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

    /**
     * 쿠폰 템플릿의 상태를 변경하는 메서드 입니다.
     *
     * @param templateId    템플릿 아이디
     * @param state 쿠폰 템플릿 사용 여부
     * @param typeId        타입 아이디
     * @return 쿠폰 템플릿 목록 페이지로 이동
     */
    @PutMapping("/type/{typeId}/templateId/{templateId}")
    public String updateCouponTemplate(@PathVariable("templateId") Long templateId,
                                       @ModelAttribute UpdateCouponTemplateStatusDto state,
                                       @PathVariable("typeId") Long typeId) {

        couponTemplateService.updateCouponTemplateStatus(
                templateId,
                Objects.nonNull(state.getState()) ? state.getState() : false);

        return "redirect:/admin/coupon/template/" + typeId;
    }
}

