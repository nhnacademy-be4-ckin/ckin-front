package store.ckin.front.coupon.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

/**
 * CouponController
 *
 * @author : 이가은
 * @version : 2024. 02. 26
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/coupon")
public class CouponController {

    private final CouponTemplateService couponTemplateService;

    @GetMapping("/{typeId}")
    public String getCouponPage(@PathVariable("typeId") Long typeId,
                                @PageableDefault(page = 0, size = 9) Pageable pageable,
                                Model model) {

        PageDto<GetCouponTemplateResponseDto> couponResponseDtoPage =
                couponTemplateService.getCouponTemplateList(pageable, typeId);

        model.addAttribute("pagination", couponResponseDtoPage);
        model.addAttribute("couponList", couponResponseDtoPage.getContent());
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
}
