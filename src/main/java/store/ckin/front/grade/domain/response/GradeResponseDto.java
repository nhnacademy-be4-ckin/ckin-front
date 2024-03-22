package store.ckin.front.grade.domain.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Grade 응답 DTO 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
@Getter
@NoArgsConstructor
public class GradeResponseDto {
    private Long id;

    private String name;

    private Integer pointRatio;

    private Integer condition;
}
