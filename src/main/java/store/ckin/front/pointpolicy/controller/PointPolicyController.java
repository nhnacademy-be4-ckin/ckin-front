package store.ckin.front.pointpolicy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 포인트 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */

@Controller
@RequestMapping("/admin/policy/point")
public class PointPolicyController {

    @GetMapping
    public String getPointPolicyMain() {
        return "admin/point-policy/main";
    }
}
