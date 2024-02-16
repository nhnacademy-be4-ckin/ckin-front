package store.ckin.front.advise;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import store.ckin.front.tag.exception.ValidationFailedException;

/**
 * Controller Advice 입니다.
 *
 * @author 정승조
 * @version 2024. 02. 13.
 */

@Slf4j
@ControllerAdvice
public class WebControllerAdvice {
    @ExceptionHandler(ValidationFailedException.class)
    public void occurValidationException(HttpServletResponse response) throws IOException {
        response.sendRedirect("/error");
    }
}
