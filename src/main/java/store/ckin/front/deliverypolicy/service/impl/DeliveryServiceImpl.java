package store.ckin.front.deliverypolicy.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.deliverypolicy.adapter.DeliveryPolicyAdapter;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyUpdateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;

import java.util.List;

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

    /**
     * {@inheritDoc}
     *
     * @param id 조회할 배송비 정책 ID
     * @return 배송비 정책 응답 DTO
     */
    @Override
    public DeliveryPolicyResponseDto getDeliveryPolicy(Long id) {
        return deliveryPolicyAdapter.requestDeliveryPolicy(id);
    }

    /**
     * {@inheritDoc}
     *
     * @param id                   수정할 배송비 정책 ID
     * @param updateDeliveryPolicy 배송비 정책 요청 DTO
     */
    @Override
    public void updateDeliveryPolicy(Long id, DeliveryPolicyUpdateRequestDto updateDeliveryPolicy) {
        deliveryPolicyAdapter.requestUpdateDeliveryPolicy(id, updateDeliveryPolicy);
    }

    /**
     * {@inheritDoc}
     *
     * @return 활성화된 배송비 정책 응답 DTO
     */
    @Override
    public DeliveryPolicyResponseDto getActiveDeliveryPolicy() {
        return deliveryPolicyAdapter.requestActiveDeliveryPolicy();
    }
}
