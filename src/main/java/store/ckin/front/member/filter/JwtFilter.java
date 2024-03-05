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
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.filter.OncePerRequestFilter;
import store.ckin.front.exception.CookieNouFoundException;
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

            // redisTemplate이 현재 접근하려는 데이터베이스의 정보 가져오기
            log.info("redisTemplate = {}", redisTemplate.getConnectionFactory().getConnection().isClosed());

            // Access 토큰이 만료되었는지 확인
            Cookie accessTokenCookie = CookieUtil.findCookie(request, "accessToken");
            String accessToken = accessTokenCookie.getValue();

            // TODO: AccessToken 유효성 검사
            if (!isExpired(accessToken)) {
                setSecurityContextHolder(accessToken);
                filterChain.doFilter(request, response);
                return;
            }

            // 만료되었다면 Refresh Token 도 만료되었는지 확인
            Cookie refreshTokenCookie = CookieUtil.findCookie(request, "refreshToken");
            String refreshToken = refreshTokenCookie.getValue();

            // Refresh Token 도 만료되었다면, 재로그인 요청
            if (isExpired(refreshToken)) {
                throw new TokenExpiredException();
            }

            TokenAuthRequestDto tokenAuthRequestDto = new TokenAuthRequestDto(refreshToken);
            TokenResponseDto tokenResponseDto = tokenService.reissueToken(tokenAuthRequestDto);

            updateJwtTokenCookie(request, response, tokenResponseDto);

            setSecurityContextHolder(accessToken);

            filterChain.doFilter(request, response);
        } catch (CookieNouFoundException ex) {
            log.debug("{} : Cookie not found", ex.getClass().getName());

            filterChain.doFilter(request, response);
        } catch (TokenAuthenticationFailedException ex) {
            log.error(ex.getMessage());
        } catch (TokenExpiredException ex) {
            log.error("{} : Refresh Token is expired", ex.getClass().getName());
        } finally {
            SecurityContextHolder.clearContext();
        }
    }

    private void setSecurityContextHolder(String accessToken) {
        String uuid = getUuid(accessToken);
        String memberId = getMemberId(uuid);

        UserDetails memberDetails = memberDetailsService.loadUserById(memberId);

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(
                        memberDetails.getUsername(),
                        null,
                        memberDetails.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(token);
    }

    private String getMemberId(String uuid) {

        return (String) redisTemplate.opsForHash().get(uuid, "id");
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