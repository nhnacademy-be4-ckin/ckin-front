package store.ckin.front.pointpolicy.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;
import store.ckin.front.pointpolicy.service.PointPolicyService;

/**
 * 포인트 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/point")
public class PointPolicyController {

    private final PointPolicyService pointPolicyService;

    @GetMapping
    public String getPointPolicyMain() {
        return "admin/point-policy/main";
    }

    @GetMapping("/register")
    public String getPointPolicyRegister() {
        return "admin/point-policy/register";
    }

    @PostMapping
    public String createPointPolicyRegister(@Valid CreatePointPolicyRequestDto createPointPolicy) {

        pointPolicyService.createPointPolicy(createPointPolicy);
        return "redirect:/admin/policy/point";
    }


}
