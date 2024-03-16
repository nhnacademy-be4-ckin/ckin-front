package store.ckin.front.util;

import java.util.Arrays;
import java.util.Base64;
import java.util.Objects;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.util.SerializationUtils;
import store.ckin.front.exception.CookieNotFoundException;

/**
 * 쿠키에 관련된 로직을 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 27.
 */
public class CookieUtil {
    private CookieUtil() {
    }

    /**
     * 쿠키를 만드는 메서드 입니다.
     */
    public static void makeCookie(HttpServletResponse response, String name, String token, int maxAage) {
        Cookie cookie = new Cookie(name, token);
        cookie.setMaxAge(maxAage);
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
    public static Cookie findCookie(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();

        if (Objects.nonNull(cookies)) {
            return Arrays.stream(cookies)
                    .filter(cookie -> cookie.getName().equals(name))
                    .findFirst()
                    .orElseThrow(CookieNotFoundException::new);
        }

        throw new CookieNotFoundException();
    }

    /**
     * 만료된 쿠키를 제거하고 새 쿠키로 업데이트 하는 메서드 입니다.
     *
     * @param request  HttpServletRequest
     * @param response HttpServletResponse
     * @param name     Cookie name
     * @param value    New Cookie value
     */
    public static void updateCookie(HttpServletRequest request,
                                    HttpServletResponse response,
                                    String name,
                                    String value,
                                    int maxAge) {
        Cookie oldCookie = findCookie(request, name);
        oldCookie.setMaxAge(0);
        response.addCookie(oldCookie);

        makeCookie(response, name, value, maxAge);
    }

    /**
     * 특정 토큰 쿠키를 삭제하는 메서드 입니다.
     *
     * @param request  HttpServletRequest
     * @param response HttpServletResponse
     */
    public static void resetCookie(HttpServletRequest request,
                                   HttpServletResponse response,
                                   String name) {
        Cookie[] cookies = request.getCookies();

        if (Objects.nonNull(cookies)) {
            Arrays.stream(cookies)
                    .filter(cookie ->
                            cookie.getName().equals(name))
                    .forEach(cookie -> {
                        cookie.setMaxAge(0);
                        response.addCookie(cookie);
                    });
        }
    }

    public static String serialize(Object object) {
        return Base64.getUrlEncoder().encodeToString(SerializationUtils.serialize(object));
    }


    /**
     * 쿠키를 역직렬화해서 객체로 변환하는 메서드 입니다.
     *
     * @param cookie Cookie
     * @param cls    Class
     */
    public static <T> T deserialize(Cookie cookie, Class<T> cls) {
        return cls.cast(
                SerializationUtils.deserialize(
                        Base64.getUrlDecoder().decode(cookie.getValue())
                )
        );
    }
}
