package store.ckin.front.member.controller;

import javax.validation.Valid;

import com.nhn.dooray.client.DoorayHook;
import com.nhn.dooray.client.DoorayHookSender;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.member.domain.request.MemberEmailOnlyRequestDto;
import store.ckin.front.member.service.MemberService;

import java.security.SecureRandom;
import java.util.Random;

/**
 * API 서버와 View 가 통신하기 위한 REST Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 20.
 */
@RestController
@RequiredArgsConstructor
public class MemberRestController {
    private final DoorayHookSender doorayHookSender;

    private final MemberService memberService;

    @PostMapping("/api/checkEmail")
    public boolean isDuplicateEmail(@Valid @RequestBody MemberEmailOnlyRequestDto memberEmailOnlyRequestDto) {
        return memberService.isDuplicateEmail(memberEmailOnlyRequestDto);
    }

    /**
     * Dooray message 로 인증번호를 보내는 메서드 입니다.
     */
    @PostMapping("/codeRequest")
    public String doorayMessage() {
        SecureRandom random = new SecureRandom();
        int randomNumber = random.nextInt(1000000);
        String randomString = String.format("%06d", randomNumber);

        doorayHookSender.send(
                DoorayHook.builder()
                        .botName("CKIN 관리자")
                        .text(randomString)
                        .build()
        );

        return randomString;
    }
}
