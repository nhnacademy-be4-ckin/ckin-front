package store.ckin.front.advice;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.token.exception.TokenAuthenticationFailedException;
import store.ckin.front.token.exception.TokenExpiredException;

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

    @ExceptionHandler(BindException.class)
    public String handleBindingResultException(BindException e, Model model) {

        List<String> errors = e.getAllErrors().stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());

        model.addAttribute("errors", errors);
        return "error";
    }

    /**
     * JWT 의 인증이 실패하거나 만료되었을 때 호출되는 ExceptionHandler 입니다.
     *
     * @author : jinwoolee
     *
     * @return 로그인 페이지로 Redirect
     */
    @ExceptionHandler({TokenAuthenticationFailedException.class, TokenExpiredException.class})
    public String handleJwtAuthenticationFailureRedirect() {
        return "redirect:/login";
    }
}
