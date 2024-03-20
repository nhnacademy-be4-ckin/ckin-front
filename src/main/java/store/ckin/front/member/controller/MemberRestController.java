package store.ckin.front.member.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.member.domain.request.MemberEmailOnlyRequestDto;
import store.ckin.front.member.service.MemberService;

/**
 * API 서버와 View 가 통신하기 위한 REST Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 20.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberRestController {
    private final MemberService memberService;

    @PostMapping("/checkEmail")
    public boolean isDuplicateEmail(@Valid @RequestBody MemberEmailOnlyRequestDto memberEmailOnlyRequestDto) {
        return memberService.isDuplicateEmail(memberEmailOnlyRequestDto);
    }
}
