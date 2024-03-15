package store.ckin.front.auth;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import store.ckin.front.exception.CookieNotFoundException;
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
        try {
            Cookie cookie = CookieUtil.findCookie(request, CookieUtil.HEADER_ACCESS_TOKEN);
            String token = cookie.getValue();
            String uuid = JwtUtil.getUuid(token);

            redisTemplate.opsForHash().delete(uuid, "id");
            redisTemplate.opsForHash().delete(uuid, JwtUtil.REFRESH_TOKEN_SUBJECT);

            SecurityContextHolder.clearContext();

            CookieUtil.resetCookie(request, response);
        } catch (CookieNotFoundException ex) {
            log.debug("Cookie not found");
        }
    }
}
