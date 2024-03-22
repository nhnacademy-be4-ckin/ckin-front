package store.ckin.front.cart.interceptor;

import java.time.Duration;
import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * 현재 발급된 카트 식별자(UUID)가 쿠키에 없는 경우, 생성하고 쿠키에 저장하는 인터셉터
 *
 * @author : 김준현
 * @version : 2024. 02. 28
 */
@Slf4j
@Component
public class CartIdInitInterceptor implements HandlerInterceptor {
    private static int COOKIE_EXPIRE = (int) Duration.ofDays(2).toSeconds();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.debug("preHandle(): called");
        // Check cookie is null
        Optional<Cookie> userUuidCookieWrapped;
        if (Objects.nonNull(request.getCookies())) {
            userUuidCookieWrapped =
                    Arrays.stream(request.getCookies()).filter(cookie -> cookie.getName().equals("CART_ID"))
                            .findFirst();
        } else {
            userUuidCookieWrapped = Optional.empty();
        }

        // Check cookie is empty
        if (userUuidCookieWrapped.isEmpty()) {
            log.debug("preHandle(): user uuid cookie is null");
            Cookie userUuidCookie = new Cookie("CART_ID", UUID.randomUUID().toString());
            userUuidCookie.setHttpOnly(true);
            userUuidCookie.setPath("/");
            // 브라우저(JS)에서 쿠키 접근 불가
            userUuidCookie.setSecure(true);
            // HTTPS 일때에만 쿠키 사용
            userUuidCookie.setMaxAge(COOKIE_EXPIRE);
            response.addCookie(userUuidCookie);
            log.debug("preHandle(): saved user uuid is -> {}", userUuidCookie.getValue());
            response.sendRedirect(request.getRequestURI());
            return false;
        }
        return true;
    }
}
