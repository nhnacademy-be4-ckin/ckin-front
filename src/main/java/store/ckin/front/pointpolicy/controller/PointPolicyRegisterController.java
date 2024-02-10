package store.ckin.front.pointpolicy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 포인트 정책 등록 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 10.
 */

@Controller
@RequestMapping("/admin/policy/point/register")
public class PointPolicyRegisterController {

    @GetMapping
    public String getPointPolicyRegister() {
        return "admin/point-policy/register";
    }

    @PostMapping
    public String postPointPolicyRegister() {

        return "redirect:/admin/policy/point";
    }
}
