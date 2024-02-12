package store.ckin.front.pointpolicy.adapter;

import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;

/**
 * 포인트 정책 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 12.
 */
public interface PointPolicyAdapter {

    void requestCreatePointPolicy(CreatePointPolicyRequestDto request);
}
