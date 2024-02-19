package store.ckin.front.deliverypolicy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 배송비 정책 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */

@Getter
@AllArgsConstructor
public class DeliveryPolicyResponseDto {

    private Long deliveryPolicyId;

    private Integer deliveryPolicyFee;

    private Integer deliveryPolicyCondition;

    private Boolean deliveryPolicyState;
}
