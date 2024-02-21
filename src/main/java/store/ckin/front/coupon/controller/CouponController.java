package store.ckin.front.coupon.controller;

import groovy.util.logging.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import store.ckin.front.coupon.dto.request.CreateCouponRequestDto;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import javax.validation.Valid;
import java.util.List;
import java.util.Objects;

/**
 * 포인트 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/coupon")
public class CouponController {

    private final CouponService couponService;
    @GetMapping
    public String getCouponAllList(Model model,
                                   @RequestParam(required = false, name = "id") Long couponId,
                                   Pageable pageable) {
        PageDto<GetCouponResponseDto> couponAllList;

        if(Objects.isNull(couponId)) {
            couponAllList = couponService.getCouponAllList(pageable);
        } else {
            GetCouponResponseDto responseDto = couponService.getCouponByCouponId(couponId);
            couponAllList = new PageDto<>(List.of(responseDto), 0, 1, 1, 1);
        }

        model.addAttribute("isPrevious", couponAllList.getNumber() > 0);
        model.addAttribute("isNext", couponAllList.getNumber() < couponAllList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponAllList.getTotalPages() == 0 ? 1 : couponAllList.getTotalPages());
        model.addAttribute("currentPage", couponAllList.getNumber());
        model.addAttribute("couponAllList", couponAllList.getContent());
        return "admin/coupon/main";
    }
    @GetMapping("/birth")
    public String getBirthCouponList(Model model,
                                     Pageable pageable) {
        PageDto<GetCouponResponseDto> couponList = couponService.getBirthCouponList(pageable);

        model.addAttribute("isPrevious", couponList.getNumber() > 0);
        model.addAttribute("isNext", couponList.getNumber() < couponList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponList.getTotalPages() == 0 ? 1 : couponList.getTotalPages());
        model.addAttribute("currentPage", couponList.getNumber());
        model.addAttribute("couponAllList", couponList.getContent());
        return "admin/coupon/main";
    }

    @GetMapping("/book")
    public String getBookCouponList(Model model,
                                     Pageable pageable) {
        PageDto<GetCouponResponseDto> couponList = couponService.getBookCouponList(pageable);

        model.addAttribute("isPrevious", couponList.getNumber() > 0);
        model.addAttribute("isNext", couponList.getNumber() < couponList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponList.getTotalPages() == 0 ? 1 : couponList.getTotalPages());
        model.addAttribute("currentPage", couponList.getNumber());
        model.addAttribute("couponAllList", couponList.getContent());
        return "admin/coupon/main";
    }

    @GetMapping("/category")
    public String getCategoryCouponList(Model model,
                                     Pageable pageable) {
        PageDto<GetCouponResponseDto> couponList = couponService.getCategoryCouponList(pageable);

        model.addAttribute("isPrevious", couponList.getNumber() > 0);
        model.addAttribute("isNext", couponList.getNumber() < couponList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponList.getTotalPages() == 0 ? 1 : couponList.getTotalPages());
        model.addAttribute("currentPage", couponList.getNumber());
        model.addAttribute("couponAllList", couponList.getContent());
        return "admin/coupon/main";
    }

    @GetMapping("/member")
    public String getMemberCouponList(Model model,
                                      @RequestParam(required = false, name = "id") Long memberId,
                                      @PageableDefault(page = 0, size = 5) Pageable pageable) {
        PageDto<GetCouponResponseDto> couponList;

        if(Objects.isNull(memberId)) {
            couponList = couponService.getCouponAllList(pageable);
        } else {
            couponList= couponService.getCouponByMemberId(pageable, memberId);
        }
        model.addAttribute("isPrevious", couponList.getNumber() > 0);
        model.addAttribute("isNext", couponList.getNumber() < couponList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponList.getTotalPages() == 0 ? 1 : couponList.getTotalPages());
        model.addAttribute("currentPage", couponList.getNumber());
        model.addAttribute("couponAllList", couponList.getContent());
        return "admin/coupon/main";
    }


}
