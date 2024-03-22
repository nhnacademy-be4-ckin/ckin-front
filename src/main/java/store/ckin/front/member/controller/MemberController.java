package store.ckin.front.member.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.service.MemberService;
import store.ckin.front.review.dto.request.UpdateReviewRequestDto;
import store.ckin.front.review.service.ReviewService;

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
    private final ReviewService reviewService;

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

        return "redirect:/?isWelcome=true";
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

    @PutMapping
    public String updateReview(UpdateReviewRequestDto updateReviewRequestDto, Long reviewId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        reviewService.updateReview(updateReviewRequestDto, reviewId, authentication.getName());

        return "redirect:/member/mypage/review";
    }
}
