package store.ckin.front.pointpolicy.adapter;

import java.util.List;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;

/**
 * 포인트 정책 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 12.
 */
public interface PointPolicyAdapter {

    /**
     * 포인트 정책 등록을 요청하는 메서드입니다.
     *
     * @param request 포인트 정책 생성 요청 DTO
     */

    void requestCreatePointPolicy(CreatePointPolicyRequestDto request);

    /**
     * 포인트 정책 리스트 조회를 요청하는 메서드입니다.
     *
     * @return 포인트 정책 리스트
     */
    List<PointPolicyResponseDto> requestPointPolicies();

    /**
     * 포인트 정책 삭제를 요청하는 메서드입니다.
     *
     * @param id 삭제할 포인트 정책 ID
     */
    void requestDeletePointPolicy(Long id);
}
