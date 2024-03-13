package store.ckin.front.member.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.exception.ServerErrorException;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberPointResponseDto;
import store.ckin.front.member.exception.MemberAlreadyExistsException;
import store.ckin.front.member.service.MemberService;

/**
 * MemberService 에 대한 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 16.
 */
@Slf4j
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
    public MemberPointResponseDto getMemberPoint(String memberId) {
        return memberAdapter.getMemberPoint(memberId);
    }

    @Override
    public MemberMyPageResponseDto getMyPageInfo(String memberId) {
        log.info("my page memberid: {}", memberId);

        MemberMyPageResponseDto responseDto = memberAdapter.getMyPageInfo(memberId);

        log.info("my page name : {}", responseDto.getName());
        log.info("my page grade name : {}", responseDto.getGradeName());

        return memberAdapter.getMyPageInfo(memberId);
    }
}