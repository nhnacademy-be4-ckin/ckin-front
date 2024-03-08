package store.ckin.front.token.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

/**
 * 인증된 유저의 토큰을 요청하는 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 27.
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TokenRequestDto {
    @NotBlank
    private String id;
}
