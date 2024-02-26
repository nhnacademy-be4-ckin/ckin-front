package store.ckin.front.coupon.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 26
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/index/coupon")
public class CouponController {

    private final CouponService couponService;

    @GetMapping("/{typeId}")
    public String getCouponPage(@PathVariable("typeId") Long typeId,
            @PageableDefault(page = 0, size = 9) Pageable pageable,
                                Model model) {
        PageDto<GetCouponResponseDto> couponResponseDtoPage = couponService.getCouponList(pageable, typeId);

        model.addAttribute("couponList", couponResponseDtoPage.getContent());
        model.addAttribute("isPrevious", couponResponseDtoPage.getNumber() > 0);
        model.addAttribute("isNext", couponResponseDtoPage.getNumber() < couponResponseDtoPage.getTotalPages() - 1);
        model.addAttribute("totalPages", couponResponseDtoPage.getTotalPages() == 0 ? 1 : couponResponseDtoPage.getTotalPages());
        model.addAttribute("currentPage", couponResponseDtoPage.getNumber());
        switch (typeId.intValue()) {
            case 1:
                return "index/coupon/birth";
            case 2:
                return "index/coupon/book";
            case 3:
                return "index/coupon/category.html";
            default:
                return "error";
        }
    }

    @PostMapping
    public String giveCoupon() {
        return "error";
    }
}
