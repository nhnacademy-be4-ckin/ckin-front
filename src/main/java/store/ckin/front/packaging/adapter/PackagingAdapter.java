package store.ckin.front.packaging.adapter;

import java.util.List;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.request.PackagingUpdateRequestDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;

/**
 * 포장 정책 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 12.
 */
public interface PackagingAdapter {

    /**
     * 포장 정책 생성 요청 메서드입니다.
     *
     * @param requestDto 포장 정책 생성 요청 DTO
     */
    void requestCreatePackagingPolicy(PackagingCreateRequestDto requestDto);

    /**
     * 포장 정책 리스트 조회 요청 메서드입니다.
     *
     * @return 포장 정책 응답 DTO 리스트
     */
    List<PackagingResponseDto> requestGetPackagingPolicies();

    /**
     * 포장 정책 삭제 요청 메서드입니다.
     *
     * @param id 삭제할 포장 정책 ID
     */
    void requestDeletePackagingPolicy(Long id);

    /**
     * 포장 정책 조회 요청 메서드입니다.
     *
     * @param id 조회할 포장 정책 ID
     * @return 포장 정책 응답 DTO
     */
    PackagingResponseDto requestGetPackagingPolicy(Long id);

    /**
     * 포장 정책 수정 요청 메서드입니다.
     *
     * @param requestDto 포장 정책 수정 요청 DTO
     */
    void requestUpdatePackagingPolicy(PackagingUpdateRequestDto requestDto);
}
