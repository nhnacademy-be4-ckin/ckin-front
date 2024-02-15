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

    /**
     * {@inheritDoc}
     *
     * @return 배송비 정책 응답 DTO 리스트
     */
    @Override
    public List<DeliveryPolicyResponseDto> getDeliveryPolicies() {
        return deliveryPolicyAdapter.requestDeliveryPolicies();
    }

    /**
     * {@inheritDoc}
     *
     * @param request 생성할 배송비 정책 DTO
     */
    @Override
    public void createDeliveryPolicy(DeliveryPolicyCreateRequestDto request) {
        deliveryPolicyAdapter.requestCreateDeliveryPolicy(request);
    }
}
