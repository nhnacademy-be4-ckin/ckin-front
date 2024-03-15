package store.ckin.front.pointhistory.service.Impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.pointhistory.adapter.PointHistoryAdapter;
import store.ckin.front.pointhistory.dto.response.PointHistoryResponseDto;
import store.ckin.front.pointhistory.service.PointHistoryService;

/**
 * 포인트 내역 서비스 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 16.
 */

@Slf4j
@Service
@RequiredArgsConstructor
public class PointHistoryServiceImpl implements PointHistoryService {

    private final PointHistoryAdapter pointHistoryAdapter;

    @Override
    public PagedResponse<List<PointHistoryResponseDto>> getPointHistoryList(String memberId, Integer pageNumber,
                                                                            Integer pageSize) {

        log.info("getPointHistoryList - memberId: {}, pageNumber: {}, pageSize: {}", memberId, pageNumber, pageSize);
        return pointHistoryAdapter.requestGetPointHistoryListByMemberId(memberId, pageNumber, pageSize);
    }
}
