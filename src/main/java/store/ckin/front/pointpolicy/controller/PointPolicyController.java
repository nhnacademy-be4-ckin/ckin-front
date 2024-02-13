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
    public String getPointPolicy() {
        return "admin/point-policy/main";
    }

    @GetMapping("/register")
    public String getPointPolicyCreateForm() {
        return "admin/point-policy/create";
    }

    @PostMapping
    public String createPointPolicy(@Valid CreatePointPolicyRequestDto createPointPolicy) {

        pointPolicyService.createPointPolicy(createPointPolicy);
        return "redirect:/admin/policy/point";
    }
}
