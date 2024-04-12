package store.ckin.front.cart.interceptor;

import static store.ckin.front.util.CookieUtil.findCookie;
import static store.ckin.front.util.CookieUtil.isExists;
import static store.ckin.front.util.CookieUtil.makeCookie;

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
import store.ckin.front.cart.dto.request.CartCreateRequestDto;
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
    private static final int COOKIE_EXPIRE_NON_MEMBER = (int) Duration.ofDays(2).toSeconds();
    private static final int COOKIE_EXPIRE_MEMBER = (int) Duration.ofHours(2).toSeconds();

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        // SecurityContextHolder 통하여 사용자의 정보 가져오기
        String memberInfo = SecurityContextHolder.getContext().getAuthentication().getName();
        // 쿠키 존재하는 지 확인하고, 존재하면 리턴
        if(isExists(request, "CART_ID")) {
            Cookie existCookie = findCookie(request, "CART_ID");
            if(existCookie.getMaxAge() != 0) {
                return true;
            }
        }

        // 로그인 한 상태라면?
        if (!memberInfo.equals("anonymousUser")) {
            Long memberId = Long.parseLong(memberInfo);
            // 유저의 카트 아이디를 DB에서 불러온다
            CartIdResponseDto cartId = cartService.readMemberCartId(memberId);
            // 유저의 장바구니 아이디가 DB에 존재한다면
            if (Objects.nonNull(cartId)) {
                makeCookie(response, "CART_ID", cartId.getCartId(), COOKIE_EXPIRE_MEMBER);
            } else {
                // 유저의 장바구니 아이디가 DB에 존재하지 않다면
                // 랜덤 문자열 생성 후 장바구니 아이디로 지정, DB에 보관
                String userRandomCartId = UUID.randomUUID().toString();
                makeCookie(response, "CART_ID", userRandomCartId, COOKIE_EXPIRE_MEMBER);
                cartService.createMemberCart(new CartCreateRequestDto(memberId, userRandomCartId));
            }
        } else {
            // 로그인 하지 않았다면?
            String userRandomCartId = UUID.randomUUID().toString();
            makeCookie(response, "CART_ID", userRandomCartId, COOKIE_EXPIRE_NON_MEMBER);
        }
        response.sendRedirect(request.getRequestURI());
        return false;
    }
}
