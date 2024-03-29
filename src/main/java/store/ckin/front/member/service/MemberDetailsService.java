package store.ckin.front.member.service;

import java.util.ArrayList;
import java.util.Collection;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.exception.ServerErrorException;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.request.MemberAuthRequestDto;
import store.ckin.front.member.domain.request.MemberOauthIdOnlyRequestDto;
import store.ckin.front.member.domain.response.MemberAuthResponseDto;
import store.ckin.front.member.domain.response.MemberOauthLoginResponseDto;
import store.ckin.front.member.exception.MemberNotFoundException;

/**
 * UserDetailsService 를 구현한 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {
    private final MemberAdapter memberAdapter;

    @Override
    public UserDetails loadUserByUsername(String email) {
        try {
            MemberAuthResponseDto memberInfo =
                    memberAdapter.getMemberAuthInfo(new MemberAuthRequestDto(email));

            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(memberInfo::getRole);

            return new User(memberInfo.getId().toString(), memberInfo.getPassword(), authorities);
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode().equals(HttpStatus.NOT_FOUND)) {
                throw new UsernameNotFoundException(
                        String.format("Not found information for this email [%s]", email));
            }

            throw new ServerErrorException();
        } catch (HttpServerErrorException ex) {
            throw new ServerErrorException();
        }
    }

    /**
     * OAuth 로그인 시 필요한 정보를 조회하는 메서드 입니다.
     *
     * @param memberOauthIdOnlyRequestDto OAuth ID
     * @return Member ID, Authority
     */
    public MemberOauthLoginResponseDto getOauthMemberInfo(MemberOauthIdOnlyRequestDto memberOauthIdOnlyRequestDto) {
        try {
            return memberAdapter.getOauthMemberInfO(memberOauthIdOnlyRequestDto);
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode().equals(HttpStatus.NOT_FOUND)) {
                throw new MemberNotFoundException();
            }

            throw new ServerErrorException();
        } catch (HttpServerErrorException ex) {
            throw new ServerErrorException();
        }
    }
}