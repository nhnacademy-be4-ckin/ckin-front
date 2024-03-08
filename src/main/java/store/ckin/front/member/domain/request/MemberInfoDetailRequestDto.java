package store.ckin.front.member.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;

/**
 * SecurityContextHolder 에 담을 멤버 정보를 요청하는 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 04.
 */
@Getter
@AllArgsConstructor
public class MemberInfoDetailRequestDto {
    @NotNull
    Long id;

    public MemberInfoDetailRequestDto(String id) {
        this.id = Long.valueOf(id);
    }
}
