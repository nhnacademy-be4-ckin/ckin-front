package store.ckin.front.advice;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;

/**
 * WebControllerAdvice 클래스입니다.
 *
 * @author 김준현
 * @version 2024. 02. 20
 */

@Slf4j
@ControllerAdvice
public class WebControllerAdvice {

    ObjectMapper objectMapper = new ObjectMapper();

    /**
     * RestTemplate 을 통해 발생한 예외 처리 핸들러입니다.
     *
     * @param e HttpClientErrorException
     * @return error.html
     */
    @ExceptionHandler({HttpClientErrorException.class, HttpServerErrorException.class})
    public String httpErrorExceptionHandler(HttpClientErrorException e, Model model) throws JsonProcessingException {

        log.info("error!!");
        log.info("body = {}, status = {}", e.getResponseBodyAsString(), e.getStatusCode());

        String responseBody = e.getResponseBodyAsString();
        ErrorResponse errorResponse = objectMapper.readValue(responseBody, ErrorResponse.class);

        log.info("errorResponse = {}", errorResponse);

        model.addAttribute("alertType", "error");
        model.addAttribute("alertMsg", e.getResponseBodyAsString());
        model.addAttribute("alertUrl", "");

        return "alert";
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
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());

        model.addAttribute("errors", errors);
        return "error";
    }
}
