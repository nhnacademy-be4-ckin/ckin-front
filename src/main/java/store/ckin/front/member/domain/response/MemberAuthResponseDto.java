package store.ckin.front.member.domain.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 사용자 인증 요청에 응답하는 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 20.
 */
@Getter
@NoArgsConstructor
public class MemberAuthResponseDto {
    private Long id;

    private String email;

    private String password;

    private String role;
}
