package store.ckin.front.grade.domain.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 등급을 수정 요청 시 필요한 DTO 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
@Getter
@AllArgsConstructor
public class GradeUpdateRequestDto {
    private String name;

    private Integer pointRatio;

    private Integer condition;
}
