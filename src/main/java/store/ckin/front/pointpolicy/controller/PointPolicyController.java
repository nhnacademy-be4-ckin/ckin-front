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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.pointpolicy.dto.request.PointPolicyCreateRequestDto;
import store.ckin.front.pointpolicy.dto.request.PointPolicyUpdateRequestDto;
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

    private static final String REDIRECT_POINT_POLICY_URL = "redirect:/admin/policy/point";

    private final PointPolicyService pointPolicyService;

    @GetMapping("/create")
    public String getPointPolicyCreateForm() {
        return "admin/policy/point/create";
    }

    @PostMapping
    public String createPointPolicy(@Valid PointPolicyCreateRequestDto createPointPolicy) {
        pointPolicyService.createPointPolicy(createPointPolicy);
        return REDIRECT_POINT_POLICY_URL;
    }

    @GetMapping
    public String getPointPolicies(Model model) {
        List<PointPolicyResponseDto> pointPolicies = pointPolicyService.getPointPolicies();

        model.addAttribute("pointPolicies", pointPolicies);
        return "admin/policy/point/main";
    }

    @GetMapping("/{id}")
    public String getPointPolicyUpdateForm(@PathVariable("id") Long id,
                                           Model model) {
        PointPolicyResponseDto pointPolicy = pointPolicyService.getPointPolicy(id);

        model.addAttribute("pointPolicyId", id);
        model.addAttribute("pointPolicy", pointPolicy);
        return "admin/policy/point/update";
    }


    @PutMapping
    public String updatePointPolicy(@Valid PointPolicyUpdateRequestDto updatePointPolicy) {
        pointPolicyService.updatePointPolicy(updatePointPolicy);
        return REDIRECT_POINT_POLICY_URL;
    }


    @DeleteMapping("/{id}")
    public String deletePointPolicy(@PathVariable("id") Long id) {
        pointPolicyService.deletePointPolicy(id);
        return REDIRECT_POINT_POLICY_URL;
    }
}
