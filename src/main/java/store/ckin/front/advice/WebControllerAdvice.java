package store.ckin.front.advice;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
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

    @ExceptionHandler(BindException.class)
    public String handleBindingResultException(BindException e, Model model) {

        List<String> errors = e.getAllErrors().stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());

        model.addAttribute("errors", errors);
        return "error";
    }
}