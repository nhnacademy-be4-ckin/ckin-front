package store.ckin.front.token.service;

import org.springframework.http.ResponseEntity;
import store.ckin.front.token.domain.TokenAuthRequestDto;
import store.ckin.front.token.domain.TokenRequestDto;
import store.ckin.front.token.domain.TokenResponseDto;

/**
 * Auth Service 에서 가져온 Token 들의 로직을 처리하는 Service interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
public interface TokenService {
    TokenResponseDto getToken(TokenRequestDto tokenRequestDto);

    TokenResponseDto reissueToken(TokenAuthRequestDto tokenAuthRequestDto);
}
