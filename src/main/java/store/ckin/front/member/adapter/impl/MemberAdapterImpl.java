package store.ckin.front.member.adapter.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.MemberAuthRequestDto;
import store.ckin.front.member.domain.MemberAuthResponseDto;
import store.ckin.front.member.domain.MemberCreateRequestDto;
import store.ckin.front.util.AdapterHeaderUtil;

/**
 * MemberAdapter 에 대한 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
@Component
@RequiredArgsConstructor
public class MemberAdapterImpl implements MemberAdapter {
    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    @Override
    public void createMember(MemberCreateRequestDto memberCreateRequestDto) {
        HttpHeaders headers = new HttpHeaders(AdapterHeaderUtil.getHttpHeaders());

        HttpEntity<MemberCreateRequestDto> requestEntity = new HttpEntity<>(memberCreateRequestDto, headers);

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public MemberAuthResponseDto getMemberAuthInfo(MemberAuthRequestDto memberAuthRequestDto) {
        HttpHeaders headers = new HttpHeaders(AdapterHeaderUtil.getHttpHeaders());

        HttpEntity<MemberAuthRequestDto> requestEntity = new HttpEntity<>(memberAuthRequestDto, headers);
        ResponseEntity<MemberAuthResponseDto> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/login",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return responseEntity.getBody();
    }
}
