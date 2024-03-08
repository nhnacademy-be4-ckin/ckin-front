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
    public boolean isExpired(String token) {
        return JWT.decode(token).getExpiresAt().before(new Date());
    }
}
