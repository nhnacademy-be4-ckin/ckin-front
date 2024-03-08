package store.ckin.front.coupon.controller;

import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 26
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/coupon")
public class CouponController {

    private final CouponService couponService;
    private final CouponTemplateService couponTemplateService;

    @GetMapping("/{typeId}")
    public String getCouponPage(@PathVariable("typeId") Long typeId,
                                @PageableDefault(page = 0, size = 9) Pageable pageable,
                                Model model) {
        PageDto<GetCouponTemplateResponseDto> couponResponseDtoPage =
                couponTemplateService.getCouponTemplateList(pageable, typeId);

        model.addAttribute("memberId", 1);
        model.addAttribute("couponList", couponResponseDtoPage.getContent());
        model.addAttribute("isPrevious", couponResponseDtoPage.getNumber() > 0);
        model.addAttribute("isNext", couponResponseDtoPage.getNumber() < couponResponseDtoPage.getTotalPages() - 1);
        model.addAttribute("totalPages",
                couponResponseDtoPage.getTotalPages() == 0 ? 1 : couponResponseDtoPage.getTotalPages());
        model.addAttribute("currentPage", couponResponseDtoPage.getNumber());
        switch (typeId.intValue()) {
            case 1:
                return "coupon/birth";
            case 2:
                return "coupon/book";
            case 3:
                return "coupon/category";
            default:
                return "error";
        }

    }

    @PostMapping("/{memberId}/{couponTemplateId}")
    public String giveCoupon(@PathVariable("memberId") Long memberId,
                             @PathVariable("couponTemplateId") Long couponTemplateId,
                             HttpServletRequest request,
                             RedirectAttributes redirectAttributes) {

        if (!couponService.createCouponByIds(memberId, couponTemplateId)) {
            redirectAttributes.addFlashAttribute("message", true);
        } else {
            redirectAttributes.addFlashAttribute("message", false);
        }

        return "redirect:" + request.getHeader("Referer");
    }
}
