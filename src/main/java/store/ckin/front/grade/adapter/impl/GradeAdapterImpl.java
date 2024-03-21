package store.ckin.front.grade.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.net.URI;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.grade.adapter.GradeAdapter;
import store.ckin.front.grade.domain.request.GradeCreateRequestDto;
import store.ckin.front.grade.domain.request.GradeUpdateRequestDto;
import store.ckin.front.grade.domain.response.GradeResponseDto;

/**
 * GradeAdapter 의 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
@Component
@RequiredArgsConstructor
public class GradeAdapterImpl implements GradeAdapter {
    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String GRADE_URL = "/api/admin/grades";

    @Override
    public void createGrade(GradeCreateRequestDto gradeCreateRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<GradeCreateRequestDto> requestEntity = new HttpEntity<>(gradeCreateRequestDto, headers);

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + GRADE_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public List<GradeResponseDto> getGradeList() {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<List<GradeResponseDto>> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + GRADE_URL,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return responseEntity.getBody();
    }

    @Override
    public void updateGrade(Long gradeId, GradeUpdateRequestDto gradeUpdateRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<GradeUpdateRequestDto> requestEntity = new HttpEntity<>(gradeUpdateRequestDto, headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(GRADE_URL)
                .path("/{gradeId}")
                .encode()
                .buildAndExpand(gradeId)
                .toUri();

        restTemplate.exchange(
                uri,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public void deleteGrade(Long gradeId) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(GRADE_URL)
                .path("/{gradeId}")
                .encode()
                .buildAndExpand(gradeId)
                .toUri();

        restTemplate.exchange(
                uri,
                HttpMethod.DELETE,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
