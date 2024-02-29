package store.ckin.front.token.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import store.ckin.front.token.adapter.TokenAdapter;
import store.ckin.front.token.domain.TokenAuthRequestDto;
import store.ckin.front.token.domain.TokenRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;
import store.ckin.front.token.exception.TokenAuthenticationFailedException;
import store.ckin.front.token.service.TokenService;

/**
 * TokenService 의 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class TokenServiceImpl implements TokenService {
    private final TokenAdapter tokenAdapter;

    @Override
    public TokenResponseDto getToken(TokenRequestDto tokenRequestDto) {
        return tokenAdapter.getToken(tokenRequestDto).getBody();
    }

    @Override
    public TokenResponseDto reissueToken(TokenAuthRequestDto tokenAuthRequestDto) {
        ResponseEntity<Void> responseEntity = tokenAdapter.reissueToken(tokenAuthRequestDto);

        if (responseEntity.getStatusCode() != HttpStatus.OK) {
            throw new TokenAuthenticationFailedException(
                    "Token Authentication failed (HttpStatusCode = "
                            + responseEntity.getStatusCode()
                            + ")");
        }

        String accessToken = responseEntity.getHeaders().getFirst("AccessToken");
        String refreshToken = responseEntity.getHeaders().getFirst("RefreshToken");

        return new TokenResponseDto(accessToken, refreshToken);
    }
}
