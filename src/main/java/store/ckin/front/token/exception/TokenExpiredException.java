package store.ckin.front.token.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * Token 이 만료되었을 때 호출되는 Exception 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 28.
 */
public class TokenExpiredException extends AuthenticationException {
    public TokenExpiredException(String message) {
        super(message);
    }

    public TokenExpiredException(String message, Throwable cause) {
        super(message, cause);
    }
}
