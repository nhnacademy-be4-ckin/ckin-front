package store.ckin.front.pointhistory.adapter;

import java.util.List;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.pointhistory.dto.response.PointHistoryResponseDto;

/**
 * 포인트 내역 어댑터 인터페이스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 16.
 */
public interface PointHistoryAdapter {

    PagedResponse<List<PointHistoryResponseDto>> requestGetPointHistoryListByMemberId(String memberId,
                                                                                      Integer pageNumber,
                                                                                      Integer pageSize);

}
