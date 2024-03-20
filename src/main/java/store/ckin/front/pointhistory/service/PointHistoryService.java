package store.ckin.front.pointhistory.service;

import java.util.List;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.pointhistory.dto.response.PointHistoryResponseDto;

/**
 * 포인트 내역 서비스 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 16.
 */
public interface PointHistoryService {
    PagedResponse<List<PointHistoryResponseDto>> getPointHistoryList(String memberId,
                                                                     Integer pageNumber,
                                                                     Integer pageSize);
}
