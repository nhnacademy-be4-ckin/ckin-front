package store.ckin.front.member.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.exception.ServerErrorException;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberInfoDetailRequestDto;
import store.ckin.front.member.domain.response.MemberInfoDetailResponseDto;
import store.ckin.front.member.exception.MemberAlreadyExistsException;
import store.ckin.front.member.exception.MemberNotFoundException;
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

        try {
            memberAdapter.createMember(memberCreateRequestDto);
        } catch (HttpClientErrorException ex) {
            if (ex.getStatusCode().equals(HttpStatus.CONFLICT)) {
                throw new MemberAlreadyExistsException();
            }
        } catch (HttpServerErrorException ex) {
            throw new ServerErrorException();
        }
    }

    @Override
    public MemberInfoDetailResponseDto getMemberInfoDetail(MemberInfoDetailRequestDto memberInfoDetailRequestDto) {
        try {
            return memberAdapter.getMemberInfoDetail(memberInfoDetailRequestDto);
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
