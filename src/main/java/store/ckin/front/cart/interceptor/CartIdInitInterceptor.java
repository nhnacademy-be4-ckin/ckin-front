package store.ckin.front.cart.interceptor;

import static store.ckin.front.util.CookieUtil.findCookie;
import static store.ckin.front.util.CookieUtil.isExists;

import java.time.Duration;
import java.util.Objects;
import java.util.UUID;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import store.ckin.front.cart.dto.response.CartIdResponseDto;
import store.ckin.front.cart.service.CartService;

/**
 * 현재 발급된 카트 식별자(UUID)가 쿠키에 없는 경우, 생성하고 쿠키에 저장하는 인터셉터
 *
 * @author : 김준현
 * @version : 2024. 02. 28
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class CartIdInitInterceptor implements HandlerInterceptor {
    private final CartService cartService;
    private static final int COOKIE_EXPIRE = (int) Duration.ofDays(2).toSeconds();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        log.debug("preHandle(): called");

        String memberInfo = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!memberInfo.equals("anonymousUser")) {
            // 로그인 한 상태라면?
            Long memberId = Long.parseLong(memberInfo);
            CartIdResponseDto cartId = cartService.readMemberCartId(memberId);
            // 유저의 장바구니 아이디가 DB에 존재한다면
            if (Objects.nonNull(cartId)) {

            }

        }

        if (isExists(request, "CART_ID")) {
            // CART_ID 쿠키가 존재한다면
            Cookie cartCookie = findCookie(request, "CART_ID");
            if (!memberInfo.equals("anonymousUser")) {
                // 로그인 한 상태라면?
                Long memberId = Long.parseLong(memberInfo);
                CartIdResponseDto cartId = cartService.readMemberCartId(memberId);
                // 유저의 장바구니 아이디가 DB에 존재한다면
                if (Objects.nonNull(cartId)) {

                }
            } else {
                // 로그인 하지 않은 상태라면? 성공
                return true;
            }
        } else {
            // CART_ID 쿠키가 존재하지 않다면
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
