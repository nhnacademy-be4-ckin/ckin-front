package store.ckin.front.oauth;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
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
@Slf4j
@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        Map<String, Object> attributes = (Map) oAuth2User.getAttributes().get("member");

        UriComponentsBuilder targetUrl = UriComponentsBuilder
                .fromUriString("/signup")
                .encode(StandardCharsets.UTF_8);

        setQueryParams(attributes, targetUrl);

        String finalUrl = targetUrl.build().toUriString();

        log.debug("finalUrl : {}", finalUrl);

        getRedirectStrategy().sendRedirect(request, response, finalUrl);
    }

    private void setQueryParams(Map<String, Object> attributes, UriComponentsBuilder targetUrl) {
        setQueryParam("email", String.valueOf(attributes.get("email")), targetUrl);
        setQueryParam("name", String.valueOf(attributes.get("name")), targetUrl);
        String contact = String.valueOf(attributes.get("mobile"));

        if (contact.startsWith("82")) {
            contact = contact.replace("82", "0");
        }

        setQueryParam("contact", contact, targetUrl);
    }

    private void setQueryParam(String key, String value, UriComponentsBuilder targetUrl) {
        targetUrl.queryParam(key, value);
    }
}
