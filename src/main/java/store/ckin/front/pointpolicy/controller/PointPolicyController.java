package store.ckin.front.pointpolicy.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;
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
    public String getPointPolicy(Model model) {
        List<PointPolicyResponseDto> pointPolicies = pointPolicyService.getPointPolicies();

        model.addAttribute("pointPolicies", pointPolicies);
        return "admin/point-policy/main";
    }

    @GetMapping("/create")
    public String getPointPolicyCreateForm() {
        return "admin/point-policy/create";
    }

    @PostMapping
    public String createPointPolicy(@Valid CreatePointPolicyRequestDto createPointPolicy) {
        pointPolicyService.createPointPolicy(createPointPolicy);
        return "redirect:/admin/policy/point";
    }

    @DeleteMapping("/{id}")
    public String deletePointPolicy(@PathVariable("id") Long id) {

        pointPolicyService.deletePointPolicy(id);
        return "redirect:/admin/policy/point";
    }
}
