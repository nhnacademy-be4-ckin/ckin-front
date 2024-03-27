package store.ckin.front.member.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import lombok.RequiredArgsConstructor;
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
import store.ckin.front.member.domain.request.MemberChangePasswordRequestDto;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberEmailOnlyRequestDto;
import store.ckin.front.member.domain.request.MemberOauthIdOnlyRequestDto;
import store.ckin.front.member.domain.request.MemberUpdateRequestDto;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberDetailInfoResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberOauthLoginResponseDto;
import store.ckin.front.member.domain.response.MemberPasswordResponseDto;

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
    public boolean isDuplicateEmail(MemberEmailOnlyRequestDto memberEmailOnlyRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<MemberEmailOnlyRequestDto> requestEntity = new HttpEntity<>(memberEmailOnlyRequestDto, headers);

        ResponseEntity<Boolean> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/checkEmail",
                HttpMethod.POST,
                requestEntity,
                Boolean.class);

        return Boolean.TRUE.equals(responseEntity.getBody());
    }

    @Override
    public MemberPasswordResponseDto getPassword(String memberId) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<Void> requestEntity =
                new HttpEntity<>(headers);

        ResponseEntity<MemberPasswordResponseDto> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{memberId}/checkPassword",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                },
                memberId);

        return responseEntity.getBody();
    }

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
    public MemberMyPageResponseDto getMyPageInfo(String memberId) {
        HttpEntity<MemberMyPageResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<MemberMyPageResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/mypage/{memberId}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId);

        return exchange.getBody();
    }

    @Override
    public MemberOauthLoginResponseDto getOauthMemberInfO(MemberOauthIdOnlyRequestDto memberOauthIdOnlyRequestDto) {
        HttpEntity<MemberOauthIdOnlyRequestDto> requestEntity =
                new HttpEntity<>(memberOauthIdOnlyRequestDto, getHttpHeaders());

        ResponseEntity<MemberOauthLoginResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/login/oauth",
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }

    @Override
    public void setDormant(String memberId) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{memberId}/dormant",
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                },
                memberId);
    }

    @Override
    public void changePassword(String memberId, MemberChangePasswordRequestDto memberChangePasswordRequestDto) {
        HttpEntity<MemberChangePasswordRequestDto> requestEntity =
                new HttpEntity<>(memberChangePasswordRequestDto, getHttpHeaders());

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{memberId}/password",
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                },
                memberId);
    }

    @Override
    public MemberDetailInfoResponseDto getMemberDetailInfo(String memberId) {
        ResponseEntity<MemberDetailInfoResponseDto> responseEntity = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{memberId}/info",
                HttpMethod.GET,
                new HttpEntity<>(getHttpHeaders()),
                new ParameterizedTypeReference<>() {
                },
                memberId);

        return responseEntity.getBody();
    }

    @Override
    public void updateMemberInfo(String memberId, MemberUpdateRequestDto memberUpdateRequestDto) {
        HttpEntity<MemberUpdateRequestDto> requestEntity =
                new HttpEntity<>(memberUpdateRequestDto, getHttpHeaders());

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{memberId}/update-info",
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                },
                memberId);
    }

    @Override
    public void updateLog(String memberId) {
        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + "/api/members/{memberId}/update-log",
                HttpMethod.PUT,
                new HttpEntity<>(getHttpHeaders()),
                new ParameterizedTypeReference<>() {
                },
                memberId);
    }
}
