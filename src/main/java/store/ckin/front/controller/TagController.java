package store.ckin.front.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TagController {
    @GetMapping
    public String test() {
        return "tag/index";
    }
}
