package store.ckin.front.pointpolicy.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.pointpolicy.dto.request.CreatePointPolicyRequestDto;
import store.ckin.front.pointpolicy.service.PointPolicyService;

/**
 * 포인트 정책 등록 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 10.
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/point/register")
public class PointPolicyCreateController {

    private final PointPolicyService pointPolicyService;

    @GetMapping
    public String getPointPolicyRegister() {
        return "admin/point-policy/register";
    }

    // TODO: @RequestBody를 사용하면 org.springframework.web.HttpMediaTypeNotSupportedException 발생
    @PostMapping
    public String createPointPolicyRegister(@Valid CreatePointPolicyRequestDto createPointPolicy) {

        log.info("createPointPolicy = {}", createPointPolicy);

        pointPolicyService.createPointPolicy(createPointPolicy);

        return "redirect:/admin/policy/point";
    }
}
