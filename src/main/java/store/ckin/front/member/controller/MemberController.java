package store.ckin.front.member.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import store.ckin.front.member.domain.MemberCreateRequestDto;
import store.ckin.front.member.service.MemberService;

/**
 * Member 에 관련된 페이지를 호출하는 Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
@Controller
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @GetMapping("/member/create")
    public String getCreateMember() {
        return "member/create";
    }

    /**
     * Member 를 생성하는 Controller Method 입니다.
     *
     * @param memberCreateRequestDto Member 생성 요청 DTO
     * @return 생성 성공 시 홈으로 Redirect, 실패하면 에러 페이지로 이동
     */
    @PostMapping("/member/create")
    public String postCreateMember(@ModelAttribute @Valid MemberCreateRequestDto memberCreateRequestDto) {
        memberService.createMember(memberCreateRequestDto);

        return "redirect:/";
    }

}
