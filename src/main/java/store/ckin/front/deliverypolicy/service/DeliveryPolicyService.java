package store.ckin.front.deliverypolicy.service;

import java.util.List;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;

/**
 * 배송비 정책을 관리하는 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */
public interface DeliveryPolicyService {

    void createDeliveryPolicy(DeliveryPolicyCreateRequestDto request);

    List<DeliveryPolicyResponseDto> getDeliveryPolicies();

}
