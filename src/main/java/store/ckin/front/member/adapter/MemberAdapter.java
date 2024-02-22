package store.ckin.front.member.adapter;

import java.util.Optional;
import org.springframework.http.ResponseEntity;
import store.ckin.front.member.domain.MemberAuthRequestDto;
import store.ckin.front.member.domain.MemberAuthResponseDto;
import store.ckin.front.member.domain.MemberCreateRequestDto;

/**
 * Member 에 관한 Adaptor Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
public interface MemberAdapter {
    ResponseEntity<Void> createMember(MemberCreateRequestDto memberCreateRequestDto);

    Optional<MemberAuthResponseDto> getMemberAuthInfo(MemberAuthRequestDto memberAuthRequestDto);
}
