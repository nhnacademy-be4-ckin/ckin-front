package store.ckin.front.token.exception;

/**
 * 토큰 인증에 실패했을 때 호출되는 Exception 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 25.
 */
public class TokenAuthenticationFailedException extends RuntimeException {
    public TokenAuthenticationFailedException() {
    }

    public TokenAuthenticationFailedException(String message) {
        super(message);
    }

    public TokenAuthenticationFailedException(String message, Throwable cause) {
        super(message, cause);
    }
}
