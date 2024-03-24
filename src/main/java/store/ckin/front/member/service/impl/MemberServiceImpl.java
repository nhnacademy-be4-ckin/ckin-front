package store.ckin.front.member.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.exception.ServerErrorException;
import store.ckin.front.member.adapter.MemberAdapter;
import store.ckin.front.member.domain.request.MemberChangePasswordRequestDto;
import store.ckin.front.member.domain.request.MemberCreateRequestDto;
import store.ckin.front.member.domain.request.MemberEmailOnlyRequestDto;
import store.ckin.front.member.domain.request.MemberPasswordRequestDto;
import store.ckin.front.member.domain.request.MemberUpdateRequestDto;
import store.ckin.front.member.domain.response.MemberDetailInfoResponseDto;
import store.ckin.front.member.domain.response.MemberMyPageResponseDto;
import store.ckin.front.member.domain.response.MemberPasswordResponseDto;
import store.ckin.front.member.exception.CannotChangePasswordException;
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
    public boolean isDuplicateEmail(MemberEmailOnlyRequestDto memberEmailOnlyRequestDto) {
        return memberAdapter.isDuplicateEmail(memberEmailOnlyRequestDto);
    }

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
    public MemberMyPageResponseDto getMyPageInfo(String memberId) {
        return memberAdapter.getMyPageInfo(memberId);
    }

    @Override
    public void setDormant(String memberId) {
        memberAdapter.setDormant(memberId);
    }

    @Override
    public void changePassword(String memberId, MemberPasswordRequestDto memberPasswordRequestDto) {
        MemberPasswordResponseDto memberPasswordResponseDto =
                memberAdapter.getPassword(memberId);

        if (!bcryptPasswordEncoder.matches(
                memberPasswordRequestDto.getOldPassword(),
                memberPasswordResponseDto.getPassword()
        )) {
            throw new CannotChangePasswordException(memberId);
        }

        memberAdapter.changePassword(
                memberId,
                new MemberChangePasswordRequestDto(
                        bcryptPasswordEncoder.encode(memberPasswordRequestDto.getNewPassword())
                ));
    }

    @Override
    public MemberDetailInfoResponseDto getMemberDetailInfo(String memberId) {
        return memberAdapter.getMemberDetailInfo(memberId);
    }

    @Override
    public void updateMemberInfo(String memberId, MemberUpdateRequestDto memberUpdateRequestDto) {
        memberAdapter.updateMemberInfo(memberId, memberUpdateRequestDto);
    }
}