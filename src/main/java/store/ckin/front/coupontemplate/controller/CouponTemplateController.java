package store.ckin.front.coupontemplate.controller;

import groovy.util.logging.Slf4j;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
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

    /**
     * 생일 쿠폰 템플릿 목록을 가져오는 메서드 입니다.
     *
     * @author : gaeun
     * @version : 2024. 02. 19.
     */
    @GetMapping("/birth")
    public String getBirthCouponTemplate(Pageable pageable, Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList = couponTemplateService.getBirthCouponTemplateList(pageable);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        model.addAttribute("isPrevious", couponTemplateList.getNumber() > 0);
        model.addAttribute("isNext", couponTemplateList.getNumber() < couponTemplateList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponTemplateList.getTotalPages() == 0 ? 1 : couponTemplateList.getTotalPages());
        model.addAttribute("currentPage", couponTemplateList.getNumber());
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        return "admin/coupon/template/birth";
    }

    /**
     * 도서 쿠폰 템플릿 목록을 가져오는 메서드 입니다.
     *
     *
     */
    @GetMapping("/book")
    public String getBookCouponTemplate(Pageable pageable, Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList = couponTemplateService.getBookCouponTemplateList(pageable);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        //TODO: 도서 이름 목록 반환..? 하기에는 너무 많으니까 그냥 아이디로만 받을까..

        model.addAttribute("isPrevious", couponTemplateList.getNumber() > 0);
        model.addAttribute("isNext", couponTemplateList.getNumber() < couponTemplateList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponTemplateList.getTotalPages() == 0 ? 1 : couponTemplateList.getTotalPages());
        model.addAttribute("currentPage", couponTemplateList.getNumber());
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        return "admin/coupon/template/book";
    }

    /**
     * 카테고리 쿠폰 템플릿 목록을 가져오는 메서드 입니다.
     *
     * @author : gaeun
     * @version : 2024. 02. 19.
     */
    @GetMapping("/category")
    public String getCategoryCouponTemplate(Pageable pageable, Model model) {
        PageDto<GetCouponTemplateResponseDto> couponTemplateList = couponTemplateService.getCategoryCouponTemplateList(pageable);
        List<GetCouponPolicyResponseDto> couponPolicyList = couponPolicyService.getCouponPolicies();

        model.addAttribute("isPrevious", couponTemplateList.getNumber() > 0);
        model.addAttribute("isNext", couponTemplateList.getNumber() < couponTemplateList.getTotalPages() - 1);
        model.addAttribute("totalPages", couponTemplateList.getTotalPages() == 0 ? 1 : couponTemplateList.getTotalPages());
        model.addAttribute("currentPage", couponTemplateList.getNumber());
        model.addAttribute("couponTemplateList", couponTemplateList.getContent());
        model.addAttribute("couponPolicyList", couponPolicyList);
        return "admin/coupon/template/category";
    }


    @PostMapping("/birth")
    public String createBirthCouponTemplate(@RequestParam("policyId") Long policyId, @RequestParam("targetMonth") Long targetMonth) {
        CreateCouponTemplateRequestDto couponTemplateRequestDto = new CreateCouponTemplateRequestDto(policyId, null, null, targetMonth + "월 생일 쿠폰", 0L);
        couponTemplateService.createCouponTemplate(couponTemplateRequestDto);

        return "redirect:/admin/coupon/template/birth";
    }

    @PostMapping("/book")
    public String createBookCouponTemplate(@RequestParam("policyId") Long policyId, @RequestParam("bookId") Long bookId) {
        //TODO: bookId가 널인지 확인
        String bookName = ""; //TODO: 도서 아이디로 이름 조회
        CreateCouponTemplateRequestDto couponTemplateRequestDto = new CreateCouponTemplateRequestDto(policyId, bookId, null, "[" + bookName + "] 도서 쿠폰", 0L);
        couponTemplateService.createCouponTemplate(couponTemplateRequestDto);

        return "redirect:/admin/coupon/template/book";
    }

    @PostMapping("/category")
    public String createCategoryCouponTemplate(@RequestParam("policyId") Long policyId, @RequestParam("categoryId") Long categoryId) {
        //TODO: categoryId 널인지 확인
        String categoryName = ""; //TODO: categoryId 이름 조회
        CreateCouponTemplateRequestDto couponTemplateRequestDto = new CreateCouponTemplateRequestDto(policyId, null, categoryId, "[" + categoryName + "] 카테고리 쿠폰", 0L);
        couponTemplateService.createCouponTemplate(couponTemplateRequestDto);

        return "redirect:/admin/coupon/template/category";
    }

    @PostMapping("/birth/{templateId}")
    public String deleteBirthCouponTemplate(@PathVariable("templateId") Long templateId) {
        couponTemplateService.deleteCouponTemplate(templateId);

        return "redirect:/admin/coupon/template/birth";
    }

    @PostMapping("/book/{templateId}")
    public String deleteBookCouponTemplate(@PathVariable("templateId") Long templateId) {
        couponTemplateService.deleteCouponTemplate(templateId);

        return "redirect:/admin/coupon/template/book";
    }

    @PostMapping("/category/{templateId}")
    public String deleteCategoryCouponTemplate(@PathVariable("templateId") Long templateId) {
        couponTemplateService.deleteCouponTemplate(templateId);

        return "redirect:/admin/coupon/template/category";
    }

}

