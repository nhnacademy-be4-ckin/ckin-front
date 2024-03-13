package store.ckin.front.member.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.request.MemberAuthRequestDto;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberInfoDetailRequestDto;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberPointResponseDto;

/**
 * MemberAdapter 에 대한 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class MemberAdapterImpl implements MemberAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    @Override
    public void createMember(MemberCreateRequestDto memberCreateRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());

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
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());

        HttpEntity<MemberAuthRequestDto> requestEntity = new HttpEntity<>(memberAuthRequestDto, headers);
        ResponseEntity<MemberAuthResponseDto> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/login",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return responseEntity.getBody();
    }

    @Override
    public MemberInfoDetailResponseDto getMemberInfoDetail(MemberInfoDetailRequestDto memberInfoDetailRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());

        HttpEntity<MemberInfoDetailRequestDto> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<MemberInfoDetailResponseDto> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/login/" + memberInfoDetailRequestDto.getId(),
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return responseEntity.getBody();
    }

    @Override
    public MemberPointResponseDto getMemberPoint(String memberId) {

        HttpEntity<MemberPointResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<MemberPointResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{id}/point",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId);


        return exchange.getBody();
    }

    @Override
    public MemberMyPageResponseDto getMyPageInfo(String memberId) {
        HttpEntity<MemberMyPageResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<MemberMyPageResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/mypage/{memberId}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId);

        MemberMyPageResponseDto responseDto = exchange.getBody();

        log.info("memberAdpater : {}", responseDto.toString());
        log.info("memberAdpater name : {}", responseDto.getName());
        log.info("memberAdpater grade name: {}", responseDto.getGradeName());

        return exchange.getBody();
    }
}
