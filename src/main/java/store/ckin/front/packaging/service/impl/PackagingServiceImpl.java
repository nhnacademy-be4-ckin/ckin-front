package store.ckin.front.packaging.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.packaging.adapter.PackagingAdapter;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
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

    @Override
    public void createPackagingPolicy(PackagingCreateRequestDto requestDto) {
        packagingAdapter.requestCreatePackagingPolicy(requestDto);
    }
}
