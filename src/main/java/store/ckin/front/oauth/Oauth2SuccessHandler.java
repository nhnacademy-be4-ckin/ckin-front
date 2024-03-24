package store.ckin.front.oauth;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.member.domain.request.MemberOauthIdOnlyRequestDto;
import store.ckin.front.member.domain.response.MemberOauthLoginResponseDto;
import store.ckin.front.member.exception.MemberNotFoundException;
import store.ckin.front.member.service.MemberDetailsService;
import store.ckin.front.token.domain.TokenRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.service.TokenService;
import store.ckin.front.util.JwtUtil;

/**
 * OAuth 에 성공한 이후 로직을 처리하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 13.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class Oauth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private static final String ATTRIBUTE_NAME_OAUTH_ID = "oauthId";

    private static final String ATTRIBUTE_NAME_EMAIL = "email";

    private static final String ATTRIBUTE_NAME_USER_NAME = "name";

    private static final String ATTRIBUTE_NAME_CONTACT = "contact";

    private static final String INTERNATIONAL_PHONE_NUMBER_KOREA = "82";

    private final MemberDetailsService memberDetailsService;

    private final TokenService tokenService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException, ServletException {
        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();
        Map<String, Object> attributes = (Map) oauth2User.getAttributes().get("member");
        String oauthId = String.valueOf(attributes.get(ATTRIBUTE_NAME_OAUTH_ID));
        log.debug("onAuthenticationSuccess : OAuth ID [{}]", oauthId);

        try {
            log.debug("OAuth Login");

            MemberOauthLoginResponseDto responseDto =
                    memberDetailsService.getOauthMemberInfo(new MemberOauthIdOnlyRequestDto(oauthId));

            String memberId = responseDto.getId().toString();
            String authority = responseDto.getRole();

            TokenResponseDto tokenResponseDto = tokenService.getToken(new TokenRequestDto(memberId, authority));
            JwtUtil.addTokenCookie(response, tokenResponseDto);

            response.sendRedirect("/");
        } catch (MemberNotFoundException ex) {
            log.debug("OAuth Signup");

            UriComponentsBuilder targetUrl = UriComponentsBuilder
                    .fromUriString("/signup")
                    .encode(StandardCharsets.UTF_8);

            setQueryParams(attributes, targetUrl);

            String finalUrl = targetUrl.build().toUriString();

            log.debug("finalUrl : {}", finalUrl);

            getRedirectStrategy().sendRedirect(request, response, finalUrl);
        }
    }

    private void setQueryParams(Map<String, Object> attributes, UriComponentsBuilder targetUrl) {
        targetUrl.queryParam(ATTRIBUTE_NAME_OAUTH_ID, String.valueOf(attributes.get(ATTRIBUTE_NAME_OAUTH_ID)));

        if (attributes.containsKey(ATTRIBUTE_NAME_EMAIL)) {
            targetUrl.queryParam(ATTRIBUTE_NAME_EMAIL, String.valueOf(attributes.get(ATTRIBUTE_NAME_EMAIL)));
        }

        if (attributes.containsKey(ATTRIBUTE_NAME_USER_NAME)) {
            targetUrl.queryParam(ATTRIBUTE_NAME_USER_NAME, String.valueOf(attributes.get(ATTRIBUTE_NAME_USER_NAME)));
        }

        if (attributes.containsKey(ATTRIBUTE_NAME_CONTACT)) {
            String contact = String.valueOf(attributes.get(ATTRIBUTE_NAME_CONTACT));
            if (contact.startsWith(INTERNATIONAL_PHONE_NUMBER_KOREA)) {
                contact = contact.replace(INTERNATIONAL_PHONE_NUMBER_KOREA, "0");
            }

            targetUrl.queryParam(ATTRIBUTE_NAME_CONTACT, contact);
        }
    }
}
