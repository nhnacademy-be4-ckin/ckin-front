package store.ckin.front.sale.dto;

import java.util.List;
import lombok.Builder;
import lombok.Getter;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;

/**
 * 판매 페이지의 포장 및 배송 정책을 담당하는 DTO 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Getter
public class SalePolicyDto {

    private final List<PackagingResponseDto> packagingPolicies;

    private final DeliveryPolicyResponseDto deliveryPolicy;

    @Builder
    public SalePolicyDto(List<PackagingResponseDto> packagingPolicies, DeliveryPolicyResponseDto deliveryPolicy) {
        this.packagingPolicies = packagingPolicies;
        this.deliveryPolicy = deliveryPolicy;
    }
}
