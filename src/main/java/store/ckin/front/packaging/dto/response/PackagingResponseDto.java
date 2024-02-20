package store.ckin.front.packaging.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 포장 정책 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 02. 20.
 */

@Getter
@AllArgsConstructor
public class PackagingResponseDto {

    private Long packagingId;

    private String packagingType;

    private Integer packagingPrice;
}
