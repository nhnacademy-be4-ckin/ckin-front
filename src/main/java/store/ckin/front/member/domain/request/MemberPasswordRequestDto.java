package store.ckin.front.member.domain.request;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 비밀번호 변경을 요청 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 24.
 */
@Getter
@AllArgsConstructor
public class MemberPasswordRequestDto {
    @NotBlank
    private String oldPassword;

    @NotBlank
    private String newPassword;
}
