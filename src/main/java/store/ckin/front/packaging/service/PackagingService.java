package store.ckin.front.packaging.service;

import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.request.PackagingUpdateRequestDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;

import java.util.List;

/**
 * 포장 정책 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 20.
 */
public interface PackagingService {

    /**
     * 포장 정책 생성 메서드입니다.
     *
     * @param requestDto 포장 정책 생성 요청 DTO
     */
    void createPackagingPolicy(PackagingCreateRequestDto requestDto);

    /**
     * 포장 정책 조회 메서드입니다.
     *
     * @param id 조회할 포장 정책 ID
     * @return 포장 정책 응답 DTO
     */
    PackagingResponseDto getPackagingPolicy(Long id);


    /**
     * 포장 정책 리스트 조회 메서드입니다.
     *
     * @return 포장 정책 응답 DTO 리스트
     */
    List<PackagingResponseDto> getPackagingPolicies();

    /**
     * 포장 정책 수정 메서드입니다.
     *
     * @param requestDto 포장 정책 수정 요청 DTO
     */
    void updatePackagingPolicy(PackagingUpdateRequestDto requestDto);

    /**
     * 포장 정책 삭제 메서드입니다.
     *
     * @param id 삭제할 포장 정책 ID
     */
    void deletePackagingPolicy(Long id);
}
