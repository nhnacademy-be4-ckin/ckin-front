package store.ckin.front.tag.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;

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
