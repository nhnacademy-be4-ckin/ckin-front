package store.ckin.front.member.service;

import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberEmailOnlyRequestDto;
import store.ckin.front.member.domain.request.MemberPasswordRequestDto;
import store.ckin.front.member.domain.request.MemberUpdateRequestDto;
import store.ckin.front.member.domain.response.MemberDetailInfoResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;

/**
 * Member 관련 서비스에 대한 내부 로직을 처리하는 Service Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberService {
    boolean isDuplicateEmail(MemberEmailOnlyRequestDto memberEmailOnlyRequestDto);

    void createMember(MemberCreateRequestDto memberCreateRequestDto);

    MemberMyPageResponseDto getMyPageInfo(String memberId);

    void setDormant(String memberId);

    void changePassword(String memberId, MemberPasswordRequestDto memberPasswordRequestDto);

    MemberDetailInfoResponseDto getMemberDetailInfo(String memberId);

    void updateMemberInfo(String memberId, MemberUpdateRequestDto memberUpdateRequestDto);

    void updateLog(String memberId);
}