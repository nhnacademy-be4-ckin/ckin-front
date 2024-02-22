package store.ckin.front.token.adapter;

import org.springframework.http.ResponseEntity;
import store.ckin.front.member.domain.LoginRequestDto;

/**
 * JWT Token 발급을 위해 Auth Server 와 통신하는 기능에 관한 interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 22.
 */
public interface TokenAdapter {
    ResponseEntity<String> getToken(LoginRequestDto loginRequestDto);
}
