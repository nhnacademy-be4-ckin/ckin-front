package store.ckin.front.oauth;

import java.io.IOException;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * OAuth 에 성공한 이후 로직을 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 13.
 */
@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        Map<String, Object> attributes = oAuth2User.getAttributes();

        UriComponentsBuilder targetUrl = UriComponentsBuilder.fromUriString("/signup");

        attributes.forEach(targetUrl::queryParam);


        getRedirectStrategy().sendRedirect(request, response, targetUrl.build().toUriString());
    }
}
