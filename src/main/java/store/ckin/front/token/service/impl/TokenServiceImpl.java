package store.ckin.front.token.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import store.ckin.front.member.domain.LoginRequestDto;
import store.ckin.front.token.adapter.TokenAdapter;
import store.ckin.front.token.domain.TokenAuthRequest;
import store.ckin.front.token.service.TokenService;

/**
 * TokenService 의 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
@Service
@RequiredArgsConstructor
public class TokenServiceImpl implements TokenService {
    private final TokenAdapter tokenAdapter;

    @Override
    public ResponseEntity<Void> getToken(LoginRequestDto loginRequestDto) {
        //TODO : 예외처리 필요
        return tokenAdapter.getToken(loginRequestDto);
    }

    @Override
    public ResponseEntity<Void> checkTokenAuth(TokenAuthRequest tokenAuthRequest) {
        return tokenAdapter.checkTokenAuth(tokenAuthRequest);
    }
}
