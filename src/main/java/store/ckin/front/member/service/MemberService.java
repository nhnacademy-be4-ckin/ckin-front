package store.ckin.front.member.service;

import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.response.MemberPointResponseDto;

/**
 * Member 관련 서비스에 대한 Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberService {
    void createMember(MemberCreateRequestDto memberCreateRequestDto);

    /**
     * 회원 포인트 조회 메서드입니다.
     *
     * @param memberId 회원 ID
     * @return 회원 포인트 응답 DTO
     */
    MemberPointResponseDto getMemberPoint(String memberId);
}