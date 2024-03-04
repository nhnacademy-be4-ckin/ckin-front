package store.ckin.front.member.service;

import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberInfoDetailRequestDto;
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;

/**
 * Member 관련 서비스에 대한 Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberService {
    void createMember(MemberCreateRequestDto memberCreateRequestDto);

    MemberInfoDetailResponseDto getMemberInfoDetail(MemberInfoDetailRequestDto memberInfoDetailRequestDto);
}
