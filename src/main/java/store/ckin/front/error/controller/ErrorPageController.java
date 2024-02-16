package store.ckin.front.error.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 16
 */
@Slf4j
@Controller
@RequestMapping("/error")
public class ErrorPageController {
    @GetMapping
    public String getErrorPage() {
        log.info("test");
        return "error/index";
    }
}
