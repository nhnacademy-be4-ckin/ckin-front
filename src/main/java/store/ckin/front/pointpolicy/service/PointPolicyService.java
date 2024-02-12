package store.ckin.front.pointpolicy.service;

import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;

/**
 * {class name}.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */
public interface PointPolicyService {

    void createPointPolicy(CreatePointPolicyRequestDto request);
}
