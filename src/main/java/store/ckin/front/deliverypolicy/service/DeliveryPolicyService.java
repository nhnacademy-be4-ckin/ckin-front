package store.ckin.front.deliverypolicy.service;

import java.util.List;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyUpdateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;

/**
 * 배송비 정책을 관리하는 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */
public interface DeliveryPolicyService {

    /**
     * 모든 배송비 정책을 조회하는 메서드입니다.
     *
     * @return 배송비 정책 응답 DTO 리스트
     */
    List<DeliveryPolicyResponseDto> getDeliveryPolicies();

    /**
     * 배송비 정책을 생성하는 메서드입니다.
     *
     * @param request 생성할 배송비 정책 DTO
     */
    void createDeliveryPolicy(DeliveryPolicyCreateRequestDto request);

    /**
     * 배송비 정책을 조회하는 메서드입니다.
     *
     * @param id 조회할 배송비 정책 ID
     * @return 조회된 배송비 정책 응답 DTO
     */
    DeliveryPolicyResponseDto getDeliveryPolicy(Long id);

    /**
     * 배송비 정책을 수정하는 메서드입니다.
     *
     * @param id                   수정할 배송비 정책 ID
     * @param updateDeliveryPolicy 배송비 정책 요청 DTO
     */
    void updateDeliveryPolicy(Long id, DeliveryPolicyUpdateRequestDto updateDeliveryPolicy);


    /**
     * 활성화된 배송비 정책을 조회하는 메서드입니다.
     *
     * @return 활성화된 배송비 정책 응답 DTO
     */
    DeliveryPolicyResponseDto getActiveDeliveryPolicy();
}
