package store.ckin.front.cart.interceptor;

import java.time.Duration;
import java.util.Arrays;
import java.util.Optional;
import java.util.UUID;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * description:
 *
 * @author : S20184366
 * @version : 2024. 02. 28
 */
@Slf4j
@Component
public class CartIdInitInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.info("preHandle(): called");
        Optional<Cookie>
                userUuidCookieWrapped = Arrays.stream(request.getCookies()).filter(cookie -> cookie.getName().equals("CART_ID")).findFirst();
        if(userUuidCookieWrapped.isEmpty()) {
            log.info("preHandle(): user uuid cookie is null");
            Cookie userUuidCookie = new Cookie("CART_ID", UUID.randomUUID().toString());
            userUuidCookie.setHttpOnly(true);
            // 브라우저(JS)에서 쿠키 접근 불가
            userUuidCookie.setMaxAge((int) Duration.ofDays(2).toSeconds());
            response.addCookie(userUuidCookie);
            log.info("preHandle(): saved user uuid is -> {}", userUuidCookie.getValue());
        }
        return true;
    }
}
