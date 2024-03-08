package store.ckin.front.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import java.util.Date;
import lombok.extern.slf4j.Slf4j;
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
