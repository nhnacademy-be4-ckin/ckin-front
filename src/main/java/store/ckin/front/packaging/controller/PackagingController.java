package store.ckin.front.packaging.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 포장(정책) 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 09.
 */

@Controller
@RequestMapping("/admin/policy/packaging")
public class PackagingController {

    @GetMapping
    public String getPackagingPolicyMain() {
        return "admin/policy/packaging/main";
    }
}
