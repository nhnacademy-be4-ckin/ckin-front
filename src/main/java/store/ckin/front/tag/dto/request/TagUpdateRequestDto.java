package store.ckin.front.tag.dto.request;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 15
 */
@Getter
@AllArgsConstructor
public class TagUpdateRequestDto {
    @NotNull
    private Long tagId;

    @NotNull(message = "태그 이름을 입력해 주세요")
    @Size(min = 2, max = 10, message = "태그 이름은 2자 이상 10자 이하로 입력해주세요.")
    private String tagName;
}
