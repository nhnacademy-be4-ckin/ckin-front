package store.ckin.front.util;

import com.auth0.jwt.JWT;
import java.util.Date;

/**
 * JWT 관련 로직을 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 28.
 */
public class JwtUtil {
    public static final String HEADER_AUTHORIZATION = "Authorization";

    public static final String AUTHORIZATION_SCHEME_BEARER = "Bearer ";

    public static final String REFRESH_TOKEN_SUBJECT = "ckin_refresh_token";

    /**
     * 토큰의 만료기간을 확인하는 메서드입니다.
     *
     * @param token JWT
     * @return 만료 여부
     */
    public static boolean isExpired(String token) {
        return JWT.decode(token)
                .getExpiresAt()
                .before(new Date());
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
