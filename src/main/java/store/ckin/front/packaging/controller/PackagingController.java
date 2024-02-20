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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.packaging.dto.request.PackagingCreateRequestDto;
import store.ckin.front.packaging.dto.request.PackagingUpdateRequestDto;
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

    /**
     * 포장 정책 생성 페이지를 호출하는 메서드입니다.
     *
     * @return 포장 정책 생성 페이지
     */
    @GetMapping("/create")
    public String getPackagingPolicyCreateForm() {
        return "admin/packaging-policy/create";
    }

    /**
     * 포장 정책을 생성하는 메서드입니다.
     *
     * @param requestDto 포장 정책 생성 요청 DTO
     * @return 포장 정책 메인 페이지
     */
    @PostMapping
    public String createPackagingPolicy(@Valid PackagingCreateRequestDto requestDto) {
        packagingService.createPackagingPolicy(requestDto);
        return "redirect:/admin/policy/packaging";
    }

    /**
     * 포장 정책 메인 페이지를 호출하는 메서드입니다.
     *
     * @param model 모든 포장 정책 리스트를 포함하는 모델
     * @return 포장 정책 메인 페이지
     */
    @GetMapping
    public String getPackagingPolicies(Model model) {

        List<PackagingResponseDto> packagingList = packagingService.getPackagingPolicies();

        model.addAttribute("packagingList", packagingList);
        return "admin/packaging-policy/main";
    }

    /**
     * 포장 정책을 삭제하는 메서드입니다.
     *
     * @param id 삭제할 포장 정책 ID
     * @return 포장 정책 메인 페이지
     */
    @DeleteMapping("/{id}")
    public String deletePackagingPolicy(@PathVariable("id") Long id) {
        packagingService.deletePackagingPolicy(id);
        return "redirect:/admin/policy/packaging";
    }

    /**
     * 포장 정책 수정 페이지를 호출하는 메서드입니다.
     *
     * @param id    수정할 포장 정책 ID
     * @param model 수정할 포장 정책을 포함하는 모델
     * @return 포장 정책 수정 페이지
     */
    @GetMapping("/{id}")
    public String getPackagingPolicyUpdateForm(@PathVariable("id") Long id,
                                               Model model) {
        PackagingResponseDto packaging = packagingService.getPackagingPolicy(id);
        model.addAttribute("packaging", packaging);
        return "admin/packaging-policy/update";
    }

    /**
     * 포장 정책을 수정하는 메서드입니다.
     *
     * @param requestDto 수정할 포장 정책 요청 DTO
     * @return 포장 정책 메인 페이지
     */
    @PutMapping
    public String updatePackagingPolicy(@Valid PackagingUpdateRequestDto requestDto) {
        packagingService.updatePackagingPolicy(requestDto);
        return "redirect:/admin/policy/packaging";
    }

}
