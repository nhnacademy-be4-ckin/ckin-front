package store.ckin.front.member.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.LoginRequestDto;
import store.ckin.front.member.domain.MemberCreateRequestDto;
import store.ckin.front.member.exception.MemberAlreadyExistsException;
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

    private final BCryptPasswordEncoder bcryptPasswordEncoder;

    @Override
    public void createMember(MemberCreateRequestDto memberCreateRequestDto) {
        String encodedPwd = bcryptPasswordEncoder.encode(memberCreateRequestDto.getPassword());
        memberCreateRequestDto.setEncodedPassword(encodedPwd);

        ResponseEntity<Void> responseEntity = memberAdapter.createMember(memberCreateRequestDto);

        if (responseEntity.getStatusCode() == HttpStatus.CONFLICT) {
            throw new MemberAlreadyExistsException();
        }
    }

    @Override
    public boolean doLogin(LoginRequestDto loginRequestDto) {
        //TODO: Auth 작업 후 처리
        return true;
    }
}
