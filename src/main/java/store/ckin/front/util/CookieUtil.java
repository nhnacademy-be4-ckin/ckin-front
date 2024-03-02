package store.ckin.front.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import store.ckin.front.exception.CookieNouFoundException;

/**
 * 쿠키에 관련된 로직을 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 27.
 */
public class CookieUtil {
    /**
     * JWT Access Token 을 쿠키로 만드는 메서드 입니다.
     *
     */
    public void makeCookie(HttpServletResponse response, String name, String token) {
        Cookie cookie = new Cookie(name, token);
        cookie.setMaxAge(-1);
        cookie.setPath("/");
        cookie.setHttpOnly(true);
        cookie.setSecure(true);

        response.addCookie(cookie);
    }

    /**
     * HttpServletRequest 에 name 에 해당하는 쿠키를 찾는 메서드 입니다.
     *
     * @param request HttpServletRequest
     * @param name    Cookie name
     * @return Cookie
     */
    public Cookie findCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals(name)) {
                return cookie;
            }
        }

        throw new CookieNouFoundException();
    }

    /**
     * 만료된 쿠키를 제거하고 새 쿠키로 업데이트 하는 메서드 입니다.
     *
     * @param request  HttpServletRequest
     * @param response HttpServletResponse
     * @param name     Cookie name
     * @param value    New Cookie value
     */
    public void updateCookie(HttpServletRequest request, HttpServletResponse response, String name, String value) {
        Cookie oldCookie = findCookie(request, name);
        oldCookie.setMaxAge(0);
        response.addCookie(oldCookie);

        makeCookie(response, name, value);
    }
}