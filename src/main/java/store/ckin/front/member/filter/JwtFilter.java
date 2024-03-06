package store.ckin.front.member.filter;

import com.auth0.jwt.JWT;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
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
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;
import store.ckin.front.member.service.MemberDetailsService;
import store.ckin.front.token.domain.TokenAuthRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.exception.TokenAuthenticationFailedException;
import store.ckin.front.token.exception.TokenExpiredException;
import store.ckin.front.token.service.TokenService;
import store.ckin.front.util.CookieUtil;

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
            Cookie accessTokenCookie = CookieUtil.findCookie(request, "accessToken");
            String accessToken = accessTokenCookie.getValue();

            // TODO: AccessToken 유효성 검사

            // Access 토큰이 만료되었는지 확인
            if (!isExpired(accessToken)) {
                if (request.getRequestURI().equals("/login")
                        || request.getRequestURI().equals("/signup")) {
                    response.sendRedirect("/");
                }

                setSecurityContextHolder(accessToken);

                filterChain.doFilter(request, response);

                return;
            }
            // 만료되었다면 Refresh Token 도 만료되었는지 확인
            Cookie refreshTokenCookie = CookieUtil.findCookie(request, "refreshToken");
            String refreshToken = refreshTokenCookie.getValue();

            // Refresh Token 도 만료되었다면, 재로그인 요청
            if (isExpired(refreshToken)) {
                throw new TokenExpiredException("Refresh Token is expired");
            }

            // Refresh Token 이 살아있다면, Refresh Token 을 Auth Server 로 보내서 AccessToken 재발급 (Refresh Token Rotation)
            TokenAuthRequestDto tokenAuthRequestDto = new TokenAuthRequestDto(refreshToken);
            TokenResponseDto tokenResponseDto = tokenService.reissueToken(tokenAuthRequestDto);

            // 재발급을 완료헀다면 토큰들을 쿠키에 갱신
            updateJwtTokenCookie(request, response, tokenResponseDto);
            log.debug("JwtFilter : Finish reissue Token");

            // Auth 서버에서 토큰이 인증이 되었다면, 인증된 정보를 SecurityContextHolder 에 넣어서 사용
            setSecurityContextHolder(accessToken);
            log.debug("JwtFilter : Finish setSecurityContextHolder");

            filterChain.doFilter(request, response);
        } catch (CookieNotFoundException ex) {
            log.debug("{} : Cookie not found", ex.getClass().getName());

            filterChain.doFilter(request, response);
        } catch (TokenAuthenticationFailedException | TokenExpiredException ex) {
            log.error(ex.getMessage());
            CookieUtil.resetCookie(request, response);
            response.sendRedirect("/login");

            filterChain.doFilter(request, response);
        } finally {
            SecurityContextHolder.clearContext();
        }
    }

    private void setSecurityContextHolder(String accessToken) {
        String uuid = getUuid(accessToken);
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

    private String getUuid(String token) {
        return JWT.decode(token.replace("Bearer ", ""))
                .getClaim("uuid")
                .asString();
    }

    private boolean isExpired(String token) {
        return JWT.decode(token.replace("Bearer ", ""))
                .getExpiresAt()
                .before(new Date());
    }

    private void updateJwtTokenCookie(HttpServletRequest request,
                                      HttpServletResponse response,
                                      TokenResponseDto tokenResponseDto) {
        String reissuedAccessToken = tokenResponseDto.getAccessToken();
        String reissuedRefreshToken = tokenResponseDto.getRefreshToken();

        CookieUtil.updateCookie(request, response, "accessToken", reissuedAccessToken);
        CookieUtil.updateCookie(request, response, "refreshToken", reissuedRefreshToken);
    }
}
