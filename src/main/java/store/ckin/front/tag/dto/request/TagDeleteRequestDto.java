package store.ckin.front.tag.dto.request;

import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 태그 삭제 요청 Dto
 *
 * @author 김준현
 * @version 2024. 02. 15
 */
@Getter
@AllArgsConstructor
public class TagDeleteRequestDto {
    @NotNull
    private Long tagId;
}
