package store.ckin.front.auth;

import com.auth0.jwt.exceptions.JWTDecodeException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import store.ckin.front.util.CookieUtil;
import store.ckin.front.util.JwtUtil;

/**
 * 로그아웃 프로세스를 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 06.
 */
@Slf4j
@RequiredArgsConstructor
public class CustomLogoutHandler implements LogoutHandler {
    private final RedisTemplate<String, Object> redisTemplate;

    @Override
    public void logout(HttpServletRequest request,
                       HttpServletResponse response,
                       Authentication authentication) {
        deleteDataIfCookieExists(request, response, JwtUtil.HEADER_ACCESS_TOKEN);
        deleteDataIfCookieExists(request, response, JwtUtil.HEADER_REFRESH_TOKEN);
    }

    private void deleteDataIfCookieExists(HttpServletRequest request,
                                          HttpServletResponse response,
                                          String name) {
        if (CookieUtil.isExists(request, name)) {
            Cookie cookie = CookieUtil.findCookie(request, name);
            deleteRedisTemplateData(request, response, cookie);
            CookieUtil.resetCookie(request, response, name);
        }
    }

    private void deleteRedisTemplateData(HttpServletRequest request,
                                         HttpServletResponse response,
                                         Cookie cookie) {
        String token = cookie.getValue();
        try {
            String uuid = JwtUtil.getUuid(token);
            log.info("UUID : {}", uuid);

            if (Boolean.TRUE.equals(redisTemplate.hasKey(uuid))) {
                redisTemplate.delete(uuid);
            }
        } catch (JWTDecodeException ex) {
            log.error("JWT [{}] is invalid", token);
            CookieUtil.resetCookie(request, response, cookie.getName());
        }
    }
}
