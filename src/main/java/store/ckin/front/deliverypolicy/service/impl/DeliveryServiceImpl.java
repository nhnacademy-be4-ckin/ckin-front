package store.ckin.front.deliverypolicy.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.deliverypolicy.adapter.DeliveryPolicyAdapter;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;

/**
 * 배송비 정책을 관리하는 서비스 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */

@Service
@RequiredArgsConstructor
public class DeliveryServiceImpl implements DeliveryPolicyService {

    private final DeliveryPolicyAdapter deliveryPolicyAdapter;

    @Override
    public List<DeliveryPolicyResponseDto> getDeliveryPolicies() {
        return deliveryPolicyAdapter.requestDeliveryPolicies();
    }

    @Override
    public void createDeliveryPolicy(DeliveryPolicyCreateRequestDto request) {
        deliveryPolicyAdapter.requestDeliveryPolicyCreate(request);
    }
}
