package store.ckin.front.member.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.service.MemberDetailsService;
import store.ckin.front.member.service.MemberService;
import store.ckin.front.review.dto.request.UpdateReviewRequestDto;
import store.ckin.front.review.service.ReviewService;
import store.ckin.front.token.domain.TokenRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.service.TokenService;
import store.ckin.front.util.JwtUtil;

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

    private final MemberDetailsService memberDetailsService;

    private final TokenService tokenService;

    private final RedisTemplate<String, Object> redisTemplate;

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
    public String postCreateMember(@Valid MemberCreateRequestDto memberCreateRequestDto,
                                   HttpServletResponse response) throws ServletException {
        memberService.createMember(memberCreateRequestDto);

        UserDetails memberInfo = memberDetailsService.loadUserByUsername(memberCreateRequestDto.getEmail());

        String memberId = memberInfo.getUsername();
        String authority = memberInfo.getAuthorities()
                .stream()
                .findFirst()
                .map(GrantedAuthority::getAuthority)
                .orElse(null);

        TokenResponseDto tokens = tokenService.getToken(new TokenRequestDto(memberId, authority));

        JwtUtil.addTokenCookie(response, tokens);

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(memberId, null, memberInfo.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(token);

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


}
