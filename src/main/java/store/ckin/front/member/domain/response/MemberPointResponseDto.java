package store.ckin.front.member.domain.response;

import java.io.Serializable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 회원의 포인트 응답 DTO 입니다.
 *
 * @author 정승조
 * @version 2024. 03. 05.
 */

@Getter
@NoArgsConstructor
@Setter
public class MemberPointResponseDto implements Serializable {

    private Integer point;
}
