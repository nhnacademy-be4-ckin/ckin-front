package store.ckin.front.advice;

import java.util.List;
import java.util.stream.Collectors;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * Controller Advice 입니다.
 *
 * @author 정승조
 * @version 2024. 02. 13.
 */

@ControllerAdvice
public class WebControllerAdvice {

    @ExceptionHandler(BindException.class)
    public String handleBindingResultException(BindException e, Model model) {

        List<String> errors = e.getAllErrors().stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());

        model.addAttribute("errors", errors);
        return "error";
    }
}