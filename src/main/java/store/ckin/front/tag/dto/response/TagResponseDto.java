package store.ckin.front.tag.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description:
 *
 * @author : 김준현
 * @version : 2024. 02. 15
 */
@Getter
@AllArgsConstructor
// for testing
public class TagResponseDto {
    private Long tagId;
    private String tagName;
}
