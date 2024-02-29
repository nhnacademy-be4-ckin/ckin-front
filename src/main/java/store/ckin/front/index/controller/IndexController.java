package store.ckin.front.index.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 인덱스 페이지 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 25.
 */

@Controller
public class IndexController {

    @GetMapping("/")
    public String indexView() {
        return "index";
    }
}
