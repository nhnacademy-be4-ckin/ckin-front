package store.ckin.front.eureka.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import store.ckin.front.eureka.adapter.EurekaAdapter;

/**
 * Eureka 테스트용 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 18.
 */

@Controller
@RequiredArgsConstructor
public class EurekaController {

    private final EurekaAdapter eurekaAdapter;


    @GetMapping("/eureka")
    public String getEureka(Model model) {
        model.addAttribute("port", eurekaAdapter.getEurekaPort());

        return "admin/eureka/main";
    }
}
