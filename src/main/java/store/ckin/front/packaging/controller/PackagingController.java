package store.ckin.front.packaging.controller;

import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.service.PackagingService;

/**
 * 포장(정책) 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 09.
 */

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/packaging")
public class PackagingController {

    private final PackagingService packagingService;

    @GetMapping
    public String getPackagingPolicies() {
        return "admin/packaging-policy/main";
    }

    @GetMapping("/create")
    public String getPackagingPolicyCreateForm() {
        return "admin/packaging-policy/create";
    }

    @PostMapping
    public String createPackagingPolicy(@Valid PackagingCreateRequestDto requestDto) {
        packagingService.createPackagingPolicy(requestDto);
        return "redirect:/admin/policy/packaging";
    }
}
