package store.ckin.front.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import java.time.Duration;
import java.util.Date;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.exception.TokenAuthenticationFailedException;


/**
 * JWT 관련 로직을 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 28.
 */
@Slf4j
public class JwtUtil {
    public static final String SECRET_KEY = "ckin";

    public static final String HEADER_AUTHORIZATION = "Authorization";

    public static final String REFRESH_TOKEN_SUBJECT = "ckin_refresh_token";

    public static final String HEADER_ACCESS_TOKEN = "accessToken";

    public static final String HEADER_REFRESH_TOKEN = "refreshToken";

    public static final long REFRESH_EXPIRATION_TIME = Duration.ofHours(2).toSeconds();

    /**
     * JWT 를 쿠키에 저장하는 메서드 입니다.
     *
     * @param tokenResponseDto Access Token, Refresh Token 이 담긴 DTO
     */
    public static void addTokenCookie(HttpServletResponse response, TokenResponseDto tokenResponseDto) {
        String accessToken = tokenResponseDto.getAccessToken();
        String refreshToken = tokenResponseDto.getRefreshToken();
        int maxAge = Long.valueOf(REFRESH_EXPIRATION_TIME).intValue();

        CookieUtil.makeCookie(response, HEADER_ACCESS_TOKEN, accessToken, maxAge);
        CookieUtil.makeCookie(response, HEADER_REFRESH_TOKEN, refreshToken, maxAge);
    }

    /**
     * 만료된 JWT 쿠키를 갱신하는 메서드 입니다.
     *
     * @param tokenResponseDto Access Token, Refresh Token 이 담긴 DTO
     */
    public static void updateJwtTokenCookie(HttpServletRequest request,
                                      HttpServletResponse response,
                                      TokenResponseDto tokenResponseDto) {
        String reissuedAccessToken = tokenResponseDto.getAccessToken();
        String reissuedRefreshToken = tokenResponseDto.getRefreshToken();
        int maxAge = Long.valueOf(REFRESH_EXPIRATION_TIME).intValue();

        CookieUtil.updateCookie(request, response, HEADER_ACCESS_TOKEN, reissuedAccessToken, maxAge);
        CookieUtil.updateCookie(request, response, HEADER_REFRESH_TOKEN, reissuedRefreshToken, maxAge);
    }

    /**
     * 토큰의 만료기간을 확인하는 메서드입니다.
     *
     * @param token JWT
     * @return 만료 여부
     */
    public static boolean isExpired(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC512(SECRET_KEY)).build();

            return verifier.verify(token)
                    .getExpiresAt()
                    .before(new Date());
        } catch (TokenExpiredException ex) {
            log.debug("{} : Token [{}] Expired", ex.getClass().getName(), token);

            return false;
        } catch (JWTVerificationException ex) {
            log.error("{} :  Token Validation failed", ex.getClass().getName());

            throw new TokenAuthenticationFailedException("Token Authentication Failed");
        }
    }

    /**
     * 토큰에서 UUID 를 추출하는 메서드 입니다.
     *
     * @param token JWT
     * @return UUID
     */
    public static String getUuid(String token) {
        return JWT.decode(token)
                .getClaim("uuid")
                .asString();
    }
}
