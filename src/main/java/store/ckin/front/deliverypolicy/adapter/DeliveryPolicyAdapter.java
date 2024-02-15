package store.ckin.front.deliverypolicy.adapter;

import java.util.List;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;

/**
 * 배송비 정책 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */
public interface DeliveryPolicyAdapter {

    List<DeliveryPolicyResponseDto> requestDeliveryPolicies();

    void requestDeliveryPolicyCreate(DeliveryPolicyCreateRequestDto request);
}
