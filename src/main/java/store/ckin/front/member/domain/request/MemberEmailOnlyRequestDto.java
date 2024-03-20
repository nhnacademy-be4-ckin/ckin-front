package store.ckin.front.member.domain.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 멤버 ID 만으로 요청을 보내는 DTO 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 20.
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberEmailOnlyRequestDto {
    @Email
    @NotBlank
    private String email;
}
