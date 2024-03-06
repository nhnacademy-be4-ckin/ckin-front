package store.ckin.front.auth;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import store.ckin.front.util.CookieUtil;

/**
 * 로그아웃 프로세스를 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 06.
 */
@Slf4j
public class CustomLogoutHandler implements LogoutHandler {
    @Override
    public void logout(HttpServletRequest request,
                       HttpServletResponse response,
                       Authentication authentication) {
        SecurityContextHolder.clearContext();
        CookieUtil.resetCookie(request, response);
    }
}
