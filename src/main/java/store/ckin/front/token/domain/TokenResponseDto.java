package store.ckin.front.token.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * 토큰 요청에 대한 응답 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 28.
 */
@Getter
@RequiredArgsConstructor
public class TokenResponseDto {
    String accessToken;

    String refreshToken;
}
