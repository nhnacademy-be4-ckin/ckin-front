package store.ckin.front.member.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * 사용자 인증 요청에 사용하는 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 19.
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberAuthRequestDto {
    @Email
    @NotBlank
    private String email;
}
