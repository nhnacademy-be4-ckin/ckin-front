package store.ckin.front.category.dto.response;

import lombok.Builder;
import lombok.Data;

/**
 * CategoryResponseDto 클래스.
 *
 * @author 나국로
 * @version 2024. 02. 15.
 */
@Data
public class CategoryResponseDto {

    private Long categoryId;

    private String categoryName;

    @Builder
    public CategoryResponseDto(Long categoryId, String categoryName) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
    }
}
