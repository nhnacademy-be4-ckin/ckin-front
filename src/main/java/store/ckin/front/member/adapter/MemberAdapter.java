package store.ckin.front.member.adapter;

import store.ckin.front.member.domain.request.MemberAuthRequestDto;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberEmailOnlyRequestDto;
import store.ckin.front.member.domain.request.MemberOauthIdOnlyRequestDto;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberOauthLoginResponseDto;

/**
 * Member 에 관한 Adaptor Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberAdapter {
    boolean isDuplicateEmail(MemberEmailOnlyRequestDto memberEmailOnlyRequestDto);

    void createMember(MemberCreateRequestDto memberCreateRequestDto);

    MemberAuthResponseDto getMemberAuthInfo(MemberAuthRequestDto memberAuthRequestDto);

    MemberMyPageResponseDto getMyPageInfo(String memberId);

    MemberOauthLoginResponseDto getOauthMemberInfO(MemberOauthIdOnlyRequestDto memberOauthIdOnlyRequestDto);

    void setDormant(String memberId);
}