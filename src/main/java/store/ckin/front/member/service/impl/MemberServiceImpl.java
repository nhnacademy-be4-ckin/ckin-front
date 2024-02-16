package store.ckin.front.member.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.MemberCreateRequestDto;
import store.ckin.front.member.service.MemberService;

/**
 * MemberService 에 대한 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberAdapter memberAdapter;

    @Override
    public boolean createMember(MemberCreateRequestDto memberCreateRequestDto) {
        return memberAdapter.createMember(memberCreateRequestDto);
    }
}
