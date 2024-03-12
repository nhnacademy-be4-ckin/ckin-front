package store.ckin.front.interceptor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import store.ckin.front.exception.CookieNotFoundException;
import store.ckin.front.util.CookieUtil;
import store.ckin.front.util.JwtUtil;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 쿠키에 JWT 토큰이 있을 때 Access 토큰을 넣어주는 Interceptor 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 06.
 */
@Slf4j
@Component
public class JwtInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response,
                             Object handler)
            throws Exception {
        try {
            Cookie cookie = CookieUtil.findCookie(request, CookieUtil.HEADER_ACCESS_TOKEN);
            String token = cookie.getValue();

            log.debug("JwtInterceptor AccessToken: {}", token);
            request.setAttribute(JwtUtil.HEADER_AUTHORIZATION, token);

            return true;
        } catch (CookieNotFoundException ex) {
            log.debug("Cookie not found");

            return true;
        }
    }
}
