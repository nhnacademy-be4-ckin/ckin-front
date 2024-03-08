package store.ckin.front.category.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * CategoryResponseDto.
 *
 * @author 나국로, 이가은
 * @version 2024. 03. 06.
 */
@Getter
@NoArgsConstructor
public class CategoryResponseDto {

    private Long categoryId;

    private String categoryName;

    @Builder
    public CategoryResponseDto(Long categoryId, String categoryName) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
}
