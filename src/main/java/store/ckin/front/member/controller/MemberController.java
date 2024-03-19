package store.ckin.front.member.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.service.MemberService;

/**
 * Member 에 관련된 페이지를 호출하는 Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
@Slf4j
@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    /**
     * [GET] 회원가입 페이지.
     *
     * @return 회원가입 View 페이지
     */
    @GetMapping("/signup")
    public String getCreateMember() {
        return "member/signup";
    }

    /**
     * [POST] 회원가입.
     *
     * @param memberCreateRequestDto Member 생성 요청 DTO
     * @return 생성 성공 시 홈으로 Redirect
     */
    @PostMapping("/signup")
    public String postCreateMember(@Valid MemberCreateRequestDto memberCreateRequestDto) {
        memberService.createMember(memberCreateRequestDto);

        return "redirect:/";
    }

    /**
     * [GET] 로그인 페이지.
     *
     * @return 로그인 View 페이지
     */
    @GetMapping("/login")
    public String getLogin() {
        return "member/login";
    }
}
