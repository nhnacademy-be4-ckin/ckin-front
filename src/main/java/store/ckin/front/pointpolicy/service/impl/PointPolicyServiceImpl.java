package store.ckin.front.pointpolicy.service.impl;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.pointpolicy.adapter.PointPolicyAdapter;
import store.ckin.front.pointpolicy.dto.request.PointPolicyCreateRequestDto;
import store.ckin.front.pointpolicy.dto.request.PointPolicyUpdateRequestDto;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;
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

    /**
     * {@inheritDoc}
     *
     * @param request 포인트 정책 생성 요청 DTO
     */
    @Override
    public void createPointPolicy(PointPolicyCreateRequestDto request) {
        pointPolicyAdapter.requestCreatePointPolicy(request);
    }

    /**
     * {@inheritDoc}
     *
     * @return 포인트 정책 응답 DTO 리스트
     */
    @Override
    public List<PointPolicyResponseDto> getPointPolicies() {
        return pointPolicyAdapter.requestPointPolicies();
    }

    /**
     * {@inheritDoc}
     *
     * @param id 조회할 포인트 정책 ID
     * @return 조회된 포인트 정책 응답 DTO
     */

    @Override
    public PointPolicyResponseDto getPointPolicy(Long id) {
        return pointPolicyAdapter.requestPointPolicy(id);
    }

    /**
     * {@inheritDoc}
     *
     * @param id 삭제할 포인트 정책 ID
     */
    @Override
    public void deletePointPolicy(Long id) {
        pointPolicyAdapter.requestDeletePointPolicy(id);
    }


    /**
     * {@inheritDoc}
     *
     * @param id      수정할 포인트 정책 ID
     * @param request 수정될 포인트 정책 요청 DTO
     */
    @Override
    public void updatePointPolicy(Long id, PointPolicyUpdateRequestDto request) {
        pointPolicyAdapter.requestUpdatePointPolicy(id, request);
    }
}
