package store.ckin.front.member.domain.response;

import java.time.LocalDate;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 회원 정보 페이지 요청에 대한 응답 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 25.
 */
@Getter
@NoArgsConstructor
public class MemberDetailInfoResponseDto {
    private String name;

    private String contact;

    private LocalDate birth;
}
