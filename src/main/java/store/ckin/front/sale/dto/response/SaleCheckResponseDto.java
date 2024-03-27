package store.ckin.front.sale.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 주문이 존재하는지 확인하는 응답 DTO
 *
 * @author 정승조
 * @version 2024. 03. 26.
 */

@Getter
@NoArgsConstructor
public class SaleCheckResponseDto {

    private Boolean isExist;
}
