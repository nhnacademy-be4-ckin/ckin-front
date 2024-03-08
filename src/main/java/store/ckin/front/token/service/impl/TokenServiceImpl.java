package store.ckin.front.token.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.exception.ServerErrorException;
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
@Service
@RequiredArgsConstructor
public class TokenServiceImpl implements TokenService {
    private final TokenAdapter tokenAdapter;

    @Override
    public TokenResponseDto getToken(TokenRequestDto tokenRequestDto) {
        try {
            return tokenAdapter.getToken(tokenRequestDto).getBody();
        } catch (Exception ex) {
            throw new ServerErrorException();
        }
    }

    @Override
    public TokenResponseDto reissueToken(TokenAuthRequestDto tokenAuthRequestDto) {
        try {
            ResponseEntity<Void> responseEntity = tokenAdapter.reissueToken(tokenAuthRequestDto);

            String accessToken = responseEntity.getHeaders().getFirst("AccessToken");
            String refreshToken = responseEntity.getHeaders().getFirst("RefreshToken");

            return new TokenResponseDto(accessToken, refreshToken);
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode().equals(HttpStatus.UNAUTHORIZED)) {
                throw new TokenAuthenticationFailedException("Token Authentication failed");
            }

            throw new ServerErrorException();
        } catch (HttpServerErrorException ex) {
            throw new ServerErrorException();
        }

    }
}
