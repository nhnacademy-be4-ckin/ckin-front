package store.ckin.front.category.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

/**
 * CategoryUpdateRequestDto.
 *
 * @author 나국로
 * @version 2024. 02. 16.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryUpdateRequestDto {
    @NotBlank(message = "수정할 카테고리명을 기입해주세요.")
    @Length(max = 10, message = "카테고리명의 길이가 맞지않습니다.")
    private String categoryName;
}
