package store.ckin.front.advice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.http.HttpStatus;

/**
 * Exception 발생 시 정보를 담아 JSON 형태로 응답하기 위한 클래스.
 *
 * @author 김준현
 * @version 2024. 02. 17
 */
@ToString
@Getter
@NoArgsConstructor
public class ErrorResponse {
    private HttpStatus code;
    private String message;
}
