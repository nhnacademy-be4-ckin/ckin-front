package store.ckin.front.packaging.controller;

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
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.response.PackagingResponseDto;
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

    @GetMapping("/create")
    public String getPackagingPolicyCreateForm() {
        return "admin/packaging-policy/create";
    }

    @PostMapping
    public String createPackagingPolicy(@Valid PackagingCreateRequestDto requestDto) {
        packagingService.createPackagingPolicy(requestDto);
        return "redirect:/admin/policy/packaging";
    }

    @GetMapping
    public String getPackagingPolicies(Model model) {

        List<PackagingResponseDto> packagingList = packagingService.getPackagingPolicies();

        model.addAttribute("packagingList", packagingList);
        return "admin/packaging-policy/main";
    }

    @DeleteMapping("/{id}")
    public String deletePackagingPolicy(@PathVariable("id") Long id) {
        packagingService.deletePackagingPolicy(id);
        return "redirect:/admin/policy/packaging";
    }
}
