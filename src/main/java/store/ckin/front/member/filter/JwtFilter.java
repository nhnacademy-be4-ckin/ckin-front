package store.ckin.front.member.filter;

import com.auth0.jwt.JWT;
import java.io.IOException;
import java.util.Date;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.OncePerRequestFilter;
import store.ckin.front.exception.CookieNouFoundException;
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
    private final TokenService tokenService;

    private final CookieUtil cookieUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            //TODO: 인증이 필요없는 공개적인 URL 은 바로 통과되게 하기

            // Access 토큰이 만료되었는지 확인
            Cookie accessTokenCookie = cookieUtil.findCookie(request, "accessToken");
            String accessToken = accessTokenCookie.getValue();

            if (!isExpired(accessToken)) {
                filterChain.doFilter(request, response);

                return;
            }
            // 만료되었다면 Refresh Token 도 만료되었는지 확인
            Cookie refreshTokenCookie = cookieUtil.findCookie(request, "refreshToken");
            String refreshToken = refreshTokenCookie.getValue();

            // Refresh Token 도 만료되었다면, 재로그인 요청
            if (isExpired(refreshToken)) {
                throw new TokenExpiredException();
            }

            // Refresh Token 이 살아있다면, Refresh Token 을 Auth Server 로 보내서 AccessToken 재발급 (Refresh Token Rotation)
            TokenAuthRequestDto tokenAuthRequestDto = new TokenAuthRequestDto(accessToken);
            TokenResponseDto tokenResponseDto = tokenService.reissueToken(tokenAuthRequestDto);

            // 재발급을 완료헀다면 토큰들을 쿠키에 갱신
            updateJwtTokenCookie(request, response, tokenResponseDto);

            //TODO: Auth 서버에서 토큰이 인증이 되었다면, 보내준 정보를 가지고 Authentication 객체 만들기

            filterChain.doFilter(request, response);
        } catch (CookieNouFoundException ex) {
            log.error("{} : Cookie not found", ex.getClass().getName());
        } catch (TokenAuthenticationFailedException ex) {
            log.error(ex.getMessage());
        } catch (TokenExpiredException ex) {
            log.error("{} : Refresh Token is expired", ex.getClass().getName());
        }

        filterChain.doFilter(request, response);
    }

    private boolean isExpired(String token) {
        return JWT.decode(token).getExpiresAt().before(new Date());
    }

    private void updateJwtTokenCookie(HttpServletRequest request,
                                      HttpServletResponse response,
                                      TokenResponseDto tokenResponseDto) {
        String reissuedAccessToken = tokenResponseDto.getAccessToken();
        String reissuedRefreshToken = tokenResponseDto.getRefreshToken();

        cookieUtil.updateCookie(request, response, "accessToken", reissuedAccessToken);
        cookieUtil.updateCookie(request, response, "refreshToken", reissuedRefreshToken);
    }
}
