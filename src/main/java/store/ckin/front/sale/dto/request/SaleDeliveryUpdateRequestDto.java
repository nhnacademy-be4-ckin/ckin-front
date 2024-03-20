package store.ckin.front.sale.dto.request;

import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import store.ckin.front.sale.dto.DeliveryStatus;

/**
 * 배송 상태 변경 요청 DTO.
 *
 * @author 정승조
 * @version 2024. 03. 19.
 */

@ToString
@Getter
@AllArgsConstructor
public class SaleDeliveryUpdateRequestDto {

    @NotNull(message = "유효한 배송 상태를 입력해주세요.")
    private DeliveryStatus deliveryStatus;
}
