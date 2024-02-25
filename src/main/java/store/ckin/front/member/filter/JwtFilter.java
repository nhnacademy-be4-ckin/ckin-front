package store.ckin.front.member.filter;

import java.io.IOException;
import java.util.Objects;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.filter.OncePerRequestFilter;
import store.ckin.front.token.domain.TokenAuthRequest;
import store.ckin.front.token.exception.TokenAuthenticationFailedException;
import store.ckin.front.token.service.TokenService;

/**
 * JWT 토큰을 인증하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 23.
 */
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String accessToken = request.getHeader("Authorization");
        String email = request.getParameter("email");

        if (Objects.isNull(accessToken) || Objects.isNull(email)) {
            throw new TokenAuthenticationFailedException("Cannot found token or email");
        }

        TokenAuthRequest tokenAuthRequest = new TokenAuthRequest(accessToken, email);
        ResponseEntity<Void> responseEntity = tokenService.checkTokenAuth(tokenAuthRequest);

        if (responseEntity.getStatusCode() != HttpStatus.OK) {
            throw new TokenAuthenticationFailedException(
                    "JwtFilter : Token Authentication failed (HttpStatusCode = "
                            + responseEntity.getStatusCode()
                            + ")");
        }

        filterChain.doFilter(request, response);
    }
}
