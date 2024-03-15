package store.ckin.front.sale.dto.response;

import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;

/**
 * 판매 페이지의 포장 및 배송 정책을 담당하는 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Getter
@NoArgsConstructor
public class SalePolicyResponseDto {

    private List<PackagingResponseDto> packagingPolicies;

    private DeliveryPolicyResponseDto deliveryPolicy;

    @Builder
    public SalePolicyResponseDto(List<PackagingResponseDto> packagingPolicies,
                                 DeliveryPolicyResponseDto deliveryPolicy) {
        this.packagingPolicies = packagingPolicies;
        this.deliveryPolicy = deliveryPolicy;
    }
}
