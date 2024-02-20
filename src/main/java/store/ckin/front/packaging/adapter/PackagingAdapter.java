package store.ckin.front.packaging.adapter;

import java.util.List;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
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
}
