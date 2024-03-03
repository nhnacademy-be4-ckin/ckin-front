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
    public UserDetails loadUserByUsername(String email) {
        MemberAuthResponseDto memberInfo =
                memberAdapter.getMemberAuthInfo(new MemberAuthRequestDto(email))
                        .orElseThrow(() ->
                                new UsernameNotFoundException(
                                        String.format("Not found information for this email [%s]",
                                                email)));

        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(memberInfo::getRole);

        return new User(memberInfo.getId().toString(), memberInfo.getPassword(), authorities);
    }
}
