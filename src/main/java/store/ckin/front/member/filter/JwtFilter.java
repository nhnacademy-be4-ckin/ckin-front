package store.ckin.front.member.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import store.ckin.front.exception.CookieNotFoundException;
import store.ckin.front.exception.ServerErrorException;
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;
import store.ckin.front.member.service.MemberDetailsService;
import store.ckin.front.token.domain.TokenAuthRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.exception.TokenAuthenticationFailedException;
import store.ckin.front.token.exception.TokenExpiredException;
import store.ckin.front.token.service.TokenService;
import store.ckin.front.util.CookieUtil;
import store.ckin.front.util.JwtUtil;

/**
 * JWT 토큰을 인증하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 23.
 */
@Slf4j
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final RedisTemplate<String, Object> redisTemplate;

    private final MemberDetailsService memberDetailsService;

    private final TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        try {
            // 정적 파일인지 확인
            if (isResourceFile(request.getRequestURI())) {
                filterChain.doFilter(request, response);

                return;
            }

            log.debug("Request URI : {}", request.getRequestURI());

            Cookie accessTokenCookie = CookieUtil.findCookie(request, CookieUtil.HEADER_ACCESS_TOKEN);
            String accessToken = accessTokenCookie.getValue();

            // Access 토큰이 만료되었는지 확인
            if (!JwtUtil.isExpired(accessToken)) {
                log.debug("Access Token is still available to use");
                if (request.getRequestURI().equals("/login")
                        || request.getRequestURI().equals("/signup")) {
                    response.sendRedirect("/");
                }

                setSecurityContextHolder(accessToken);
                filterChain.doFilter(request, response);
                return;
            }

            // 만료되었다면 Refresh Token 도 만료되었는지 확인
            Cookie refreshTokenCookie = CookieUtil.findCookie(request, CookieUtil.HEADER_REFRESH_TOKEN);
            String refreshToken = refreshTokenCookie.getValue();

            // Refresh Token 도 만료되었다면, 재로그인 요청
            if (JwtUtil.isExpired(refreshToken)) {
                throw new TokenExpiredException("Refresh Token is expired");
            }

            TokenAuthRequestDto tokenAuthRequestDto = new TokenAuthRequestDto(refreshToken);
            TokenResponseDto tokenResponseDto = tokenService.reissueToken(tokenAuthRequestDto);

            updateJwtTokenCookie(request, response, tokenResponseDto);

            // Auth 서버에서 토큰이 인증이 되었다면, 인증된 정보를 SecurityContextHolder 에 넣어서 사용
            setSecurityContextHolder(accessToken);
            log.debug("JwtFilter : Finish setSecurityContextHolder");

            filterChain.doFilter(request, response);
        } catch (CookieNotFoundException ex) {
            //TODO: 정상적이지 않은 Token 을 갖고 있는 쿠키의 상태일 때 CookieNotFoundException 호출이 되면 로그아웃이 정상적으로 작동하도록 처리"

            log.debug("{} : Cookie not found", ex.getClass().getName());

            filterChain.doFilter(request, response);
        } catch (TokenAuthenticationFailedException | TokenExpiredException ex) {
            log.error(ex.getMessage());
            response.sendRedirect("/logout");

            filterChain.doFilter(request, response);
        } catch (ServerErrorException ex) {
            log.error("{} : Internal Server error", ex.getClass().getName());
            response.sendRedirect("/error");

            filterChain.doFilter(request, response);
        } finally {
            SecurityContextHolder.clearContext();
        }
    }


    private void setSecurityContextHolder(String accessToken) {
        String uuid = JwtUtil.getUuid(accessToken);

        log.debug("UUID : {}", uuid);

        String memberId = getMemberId(uuid);

        MemberInfoDetailResponseDto memberInfo = memberDetailsService.loadUserById(memberId);

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(memberInfo::getRole);

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(memberId, null, authorities);

        SecurityContextHolder.getContext().setAuthentication(token);
    }

    private String getMemberId(String uuid) {
        return (String) Objects.requireNonNull(
                redisTemplate
                        .opsForHash()
                        .get(uuid, "id"));
    }

    private void updateJwtTokenCookie(HttpServletRequest request,
                                      HttpServletResponse response,
                                      TokenResponseDto tokenResponseDto) {
        String reissuedAccessToken = tokenResponseDto.getAccessToken();
        String reissuedRefreshToken = tokenResponseDto.getRefreshToken();

        CookieUtil.updateCookie(request, response, CookieUtil.HEADER_ACCESS_TOKEN, reissuedAccessToken);
        CookieUtil.updateCookie(request, response, CookieUtil.HEADER_REFRESH_TOKEN, reissuedRefreshToken);
    }

    private static boolean isResourceFile(String requestUri) {
        return requestUri.startsWith("/static")
                || requestUri.startsWith("/css")
                || requestUri.startsWith("/js")
                || requestUri.startsWith("/images");
    }
}