package store.ckin.front.member.service;

import java.util.ArrayList;
import java.util.Collection;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.MemberAuthRequestDto;
import store.ckin.front.member.domain.MemberAuthResponseDto;

/**
 * UserDetailsService 를 구현한 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {
    private final MemberAdapter memberAdapter;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        MemberAuthResponseDto memberAuthResponseDto =
                memberAdapter.getMemberAuthInfo(new MemberAuthRequestDto(email));

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(memberAuthResponseDto::getRole);

        //TODO : email 에 일치하는 정보가 없을 경우 예외상황이 필요할 것으로 보임.

        return new User(memberAuthResponseDto.getEmail(), memberAuthResponseDto.getPassword(), authorities);
    }
}
