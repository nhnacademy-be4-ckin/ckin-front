package store.ckin.front.pointpolicy.service;

import java.util.List;
import store.ckin.front.pointpolicy.dto.request.PointPolicyCreateRequestDto;
import store.ckin.front.pointpolicy.dto.request.PointPolicyUpdateRequestDto;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;

/**
 * 포인트 정책 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */
public interface PointPolicyService {

    /**
     * 포인트 정책 생성을 위한 메서드입니다.
     *
     * @param request 포인트 정책 생성 요청 DTO
     */
    void createPointPolicy(PointPolicyCreateRequestDto request);

    /**
     * 포인트 정책 리스트를 조회하는 메서드입니다.
     *
     * @return 포인트 정책 리스트
     */
    List<PointPolicyResponseDto> getPointPolicies();


    /**
     * 포인트 정책을 조회하는 메서드입니다.
     *
     * @param id 조회할 포인트 정책 ID
     * @return 조회된 포인트 정책 응답 DTO
     */
    PointPolicyResponseDto getPointPolicy(Long id);

    /**
     * 포인트 정책 삭제를 위한 메서드입니다.
     *
     * @param id 삭제할 포인트 정책 ID
     */
    void deletePointPolicy(Long id);


    /**
     * 포인트 정책 수정을 요청하는 메서드입니다.
     *
     * @param id      수정할 포인트 정책 ID
     * @param request 수정될 포인트 정책 요청 DTO
     */
    void updatePointPolicy(Long id, PointPolicyUpdateRequestDto request);

}
