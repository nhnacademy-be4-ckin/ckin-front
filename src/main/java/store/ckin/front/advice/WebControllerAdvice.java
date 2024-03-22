package store.ckin.front.advice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;
import javax.servlet.http.HttpServletRequest;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import store.ckin.front.util.AlertUtil;

/**
 * WebControllerAdvice 클래스입니다.
 *
 * @author 김준현
 * @version 2024. 02. 20
 */

@ControllerAdvice
public class WebControllerAdvice {

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * RestTemplate 을 통해 발생한 예외 처리 핸들러입니다.
     *
     * @param e HttpClientErrorException
     * @return error.html
     */
    @ExceptionHandler({HttpClientErrorException.class, HttpServerErrorException.class})
    public String httpErrorExceptionHandler(HttpServletRequest request,
                                            HttpClientErrorException e, Model model) throws JsonProcessingException {

        String responseBody = e.getResponseBodyAsString(StandardCharsets.UTF_8);
        ErrorResponse errorResponse = objectMapper.readValue(responseBody, ErrorResponse.class);

        return AlertUtil.showErrorAlert(model, errorResponse.getMessage(), request.getRequestURI());
    }

    /**
     * '@Valid' 에서 발생한 BindException 예외 처리 핸들러입니다.
     *
     * @param e     BindException
     * @param model Model
     * @return error.html
     */
    @ExceptionHandler(BindException.class)
    public String handleBindingResultException(BindException e, Model model) {

        List<String> errors = e.getAllErrors().stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .collect(Collectors.toList());

        model.addAttribute("errors", errors);
        return "error";
    }
}
