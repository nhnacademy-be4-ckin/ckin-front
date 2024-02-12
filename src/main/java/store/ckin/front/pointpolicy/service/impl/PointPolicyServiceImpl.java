package store.ckin.front.pointpolicy.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.pointpolicy.adapter.PointPolicyAdapter;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;
import store.ckin.front.pointpolicy.service.PointPolicyService;

/**
 * 포인트 정책 서비스를 구현한 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */

@Service
@RequiredArgsConstructor
public class PointPolicyServiceImpl implements PointPolicyService {

    private final PointPolicyAdapter pointPolicyAdapter;

    @Override
    public void createPointPolicy(CreatePointPolicyRequestDto request) {
        pointPolicyAdapter.requestCreatePointPolicy(request);
    }
}
