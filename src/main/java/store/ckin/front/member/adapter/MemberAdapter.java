package store.ckin.front.member.adapter;

import store.ckin.front.member.domain.request.*;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberOauthLoginResponseDto;
import store.ckin.front.member.domain.response.MemberPasswordResponseDto;

/**
 * Member 에 관한 Adaptor Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberAdapter {
    boolean isDuplicateEmail(MemberEmailOnlyRequestDto memberEmailOnlyRequestDto);

    MemberPasswordResponseDto getPassword(String memberId);

    void createMember(MemberCreateRequestDto memberCreateRequestDto);

    MemberAuthResponseDto getMemberAuthInfo(MemberAuthRequestDto memberAuthRequestDto);

    MemberMyPageResponseDto getMyPageInfo(String memberId);

    MemberOauthLoginResponseDto getOauthMemberInfO(MemberOauthIdOnlyRequestDto memberOauthIdOnlyRequestDto);

    void setDormant(String memberId);

    void changePassword(String memberId, MemberChangePasswordRequestDto memberChangePasswordRequestDto);
}