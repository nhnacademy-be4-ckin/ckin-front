package store.ckin.front.tag.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 태그 정보 응답 Dto
 *
 * @author : 김준현
 * @version : 2024. 02. 15
 */
@Getter
@AllArgsConstructor
public class TagResponseDto {
    private Long tagId;
    private String tagName;
}
