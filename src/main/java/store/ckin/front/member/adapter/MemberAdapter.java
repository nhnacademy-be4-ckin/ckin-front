package store.ckin.front.member.adapter;

import store.ckin.front.member.domain.request.MemberAuthRequestDto;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberInfoDetailRequestDto;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberPointResponseDto;

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

    /**
     * 회원 포인트 조회 메서드입니다.
     *
     * @param memberId 회원 ID
     * @return 회원 포인트 응답 DTO
     */
    MemberPointResponseDto getMemberPoint(String memberId);

    MemberMyPageResponseDto getMyPageInfo(String memberId);
}