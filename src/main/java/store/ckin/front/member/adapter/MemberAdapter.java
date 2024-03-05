package store.ckin.front.member.adapter;

import store.ckin.front.member.domain.request.MemberAuthRequestDto;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberInfoDetailRequestDto;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;

/**
 * Member 에 관한 Adaptor Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberAdapter {
    void createMember(MemberCreateRequestDto memberCreateRequestDto);

    MemberAuthResponseDto getMemberAuthInfo(MemberAuthRequestDto memberAuthRequestDto);

    MemberInfoDetailResponseDto getMemberInfoDetail(MemberInfoDetailRequestDto memberInfoDetailRequestDto);
}