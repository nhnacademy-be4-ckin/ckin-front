package store.ckin.front.packaging.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.packaging.adapter.PackagingAdapter;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.request.PackagingUpdateRequestDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;
import store.ckin.front.packaging.service.PackagingService;

/**
 * 포장 정책 서비스 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 20.
 */

@Service
@RequiredArgsConstructor
public class PackagingServiceImpl implements PackagingService {

    private final PackagingAdapter packagingAdapter;

    /**
     * {@inheritDoc}
     *
     * @param requestDto 포장 정책 생성 요청 DTO
     */
    @Override
    public void createPackagingPolicy(PackagingCreateRequestDto requestDto) {
        packagingAdapter.requestCreatePackagingPolicy(requestDto);
    }

    /**
     * {@inheritDoc}
     *
     * @param id 조회할 포장 정책 ID
     * @return 포장 정책 응답 DTO
     */
    @Override
    public PackagingResponseDto getPackagingPolicy(Long id) {
        return packagingAdapter.requestGetPackagingPolicy(id);
    }

    /**
     * {@inheritDoc}
     *
     * @return 포장 정책 응답 DTO 리스트
     */
    @Override
    public List<PackagingResponseDto> getPackagingPolicies() {
        return packagingAdapter.requestGetPackagingPolicies();
    }

    /**
     * {@inheritDoc}
     *
     * @param requestDto 포장 정책 수정 요청 DTO
     */
    @Override
    public void updatePackagingPolicy(PackagingUpdateRequestDto requestDto) {
        packagingAdapter.requestUpdatePackagingPolicy(requestDto);
    }

    /**
     * {@inheritDoc}
     *
     * @param id 삭제할 포장 정책 ID
     */
    @Override
    public void deletePackagingPolicy(Long id) {
        packagingAdapter.requestDeletePackagingPolicy(id);
    }
}
