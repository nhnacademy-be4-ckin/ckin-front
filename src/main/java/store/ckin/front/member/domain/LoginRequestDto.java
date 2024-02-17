package store.ckin.front.member.domain;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 로그인에 필요한 정보를 요청하기 위한 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 17.
 */
@Getter
@NoArgsConstructor
public class LoginRequestDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;
}
