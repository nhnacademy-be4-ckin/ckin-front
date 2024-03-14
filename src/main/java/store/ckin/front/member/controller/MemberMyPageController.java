package store.ckin.front.member.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.service.MemberService;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * 회원 - 마이페이지 컨트롤러 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 14.
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/member/mypage")
public class MemberMyPageController {

    private final SaleService saleService;

    private final MemberService memberService;


    /**
     * 회원 정보를 Model에 추가하는 메서드입니다.
     *
     * @param model Model
     */
    @ModelAttribute
    public void addMemberInfo(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String memberId = authentication.getName();

        MemberMyPageResponseDto responseDto = memberService.getMyPageInfo(memberId);
        model.addAttribute("member", responseDto);
    }

    /**
     * 회원의 주문 목록을 조회하는 메서드입니다.
     *
     * @param model Model
     * @return 회원의 주문 목록 페이지
     */
    @GetMapping("/order-list")
    public String getMemberOrderList(@PageableDefault Pageable pageable,
                                     Model model) {


        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PagedResponse<List<SaleInfoResponseDto>> saleList
                = saleService.getSalesByMemberId(authentication.getName(), pageable.getPageNumber() - 1,
                pageable.getPageSize());

        model.addAttribute("saleList", saleList.getData());
        model.addAttribute("pageInfo", saleList.getPageInfo());
        return "member/mypage/order-list";
    }
}
