package store.ckin.front.advice;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 20
 */
@ControllerAdvice
public class WebControllerAdvice {
    @ExceptionHandler({HttpClientErrorException.class, HttpServerErrorException.class})
    public String httpErrorExceptionHandler() {
        return "error";
    }

    @ExceptionHandler(Exception.class)
    public String generalExceptionHandler() {
        return "error";
    }
}
