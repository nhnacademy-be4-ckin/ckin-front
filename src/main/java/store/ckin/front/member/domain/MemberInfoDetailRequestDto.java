package store.ckin.front.member.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * SecurityContextHolder 에 담을 멤버 정보를 요청하는 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 04.
 */
@Getter
@AllArgsConstructor
public class MemberInfoDetailRequestDto {
    Long id;

    public MemberInfoDetailRequestDto(String id) {
        this.id = Long.valueOf(id);
    }
}
