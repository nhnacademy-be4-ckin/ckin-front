package store.ckin.front.member.exception;

/**
 * 패스워드를 변경하지 못했을 때 호출되는 메서드 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 24.
 */
public class CannotChangePasswordException extends RuntimeException {
    public CannotChangePasswordException(String memberId) {
        super(String.format("비밀번호를 바꿀 수 없습니다. ID : [%s]", memberId));
    }
}
