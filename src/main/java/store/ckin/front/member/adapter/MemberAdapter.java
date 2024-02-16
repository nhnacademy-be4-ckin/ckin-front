package store.ckin.front.member.adapter;

import store.ckin.front.member.domain.MemberCreateRequestDto;

/**
 * Member 에 관한 Adaptor Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberAdapter {
    boolean createMember(MemberCreateRequestDto memberCreateRequestDto);
}
