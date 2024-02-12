package store.ckin.front.pointpolicy.adapter.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.pointpolicy.adapter.PointPolicyAdapter;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;

/**
 * 포인트 정책 어댑터 구현 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 12.
 */

@Component
@RequiredArgsConstructor
public class PointPolicyAdapterImpl implements PointPolicyAdapter {

    private final RestTemplate restTemplate;
    private static final String POINT_POLICY_SERVICE_URL = "http://localhost:8081/api/point-policy";

    @Override
    public void requestCreatePointPolicy(CreatePointPolicyRequestDto request) {
        HttpEntity<CreatePointPolicyRequestDto> requestEntity = new HttpEntity<>(request, getHttpHeaders());

        ResponseEntity<Void> exchange = restTemplate.exchange(
                POINT_POLICY_SERVICE_URL + "/create",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        // TODO 예외 처리 어떻게 해야될지 고민해보기
        if (exchange.getStatusCode() != HttpStatus.CREATED) {
            throw new RuntimeException("포인트 정책 생성 실패");
        }
    }

    private static HttpHeaders getHttpHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));
        return httpHeaders;
    }
}
