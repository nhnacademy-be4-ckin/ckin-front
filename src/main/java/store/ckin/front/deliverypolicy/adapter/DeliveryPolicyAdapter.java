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

    /**
     * 모든 배송비 정책 조회를 요청하는 메서드입니다.
     *
     * @return 배송비 정책 응답 DTO 리스트
     */
    List<DeliveryPolicyResponseDto> requestDeliveryPolicies();

    /**
     * 배송비 정책 생성을 요청하는 메서드입니다.
     *
     * @param request 생성할 배송비 정책 요청 DTO
     */
    void requestCreateDeliveryPolicy(DeliveryPolicyCreateRequestDto request);

    DeliveryPolicyResponseDto requestDeliveryPolicy(Long id);
}
