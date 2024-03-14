package store.ckin.front.oauth;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

/**
 * OAuth 서버에서 계정 정보를 가져오는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 13.
 */
@Slf4j
@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        log.info("OAuth start");

        String platform = userRequest.getClientRegistration().getClientId();

        //TODO: PAYCO 로그인을 위한 Convertor Custom 해서 적용

        return super.loadUser(userRequest);
    }
}