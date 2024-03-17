package store.ckin.front.pointhistory.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.pointhistory.adapter.PointHistoryAdapter;
import store.ckin.front.pointhistory.dto.response.PointHistoryResponseDto;

/**
 * 포인트 내역 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 16.
 */

@Component
@RequiredArgsConstructor
public class PointHistoryAdapterImpl implements PointHistoryAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String POINT_HISTORY_URL = "/api/point-history";

    /**
     * 회원의 포인트 내역 리스트를 요청하는 메서드입니다.
     *
     * @param memberId   회원 아이디
     * @param pageNumber 페이지 번호
     * @param pageSize   페이지 사이즈
     * @return 포인트 내역 리스트
     */
    @Override
    public PagedResponse<List<PointHistoryResponseDto>> requestGetPointHistoryListByMemberId(String memberId,
                                                                                             Integer pageNumber,
                                                                                             Integer pageSize) {

        HttpEntity<Long> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<PagedResponse<List<PointHistoryResponseDto>>> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + POINT_HISTORY_URL + "?memberId={memberId}&page={pageNumber}&size={pageSize}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId, pageNumber, pageSize);

        return exchange.getBody();
    }
}
