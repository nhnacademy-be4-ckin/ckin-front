package store.ckin.front.member.domain.request;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * OAuth ID 만으로 요청하는 DTO 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 17.
 */
@Getter
@AllArgsConstructor
public class MemberOauthIdOnlyRequestDto {
    @NotBlank
    private String oauthId;
}
