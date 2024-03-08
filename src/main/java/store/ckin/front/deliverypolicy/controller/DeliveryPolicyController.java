package store.ckin.front.deliverypolicy.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyUpdateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;

import javax.validation.Valid;
import java.util.List;

/**
 * 배송 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 09.
 */

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/delivery")
public class DeliveryPolicyController {

    private static final String REDIRECT_DELIVERY_POLICY_URL = "redirect:/admin/policy/delivery";

    private final DeliveryPolicyService deliveryPolicyService;

    /**
     * 배송비 정책 메인 페이지 요청하는 메서드입니다.
     *
     * @return 배송비 정책 메인 View
     */
    @GetMapping
    public String getDeliveryPolicies(Model model) {
        List<DeliveryPolicyResponseDto> deliveryPolicies = deliveryPolicyService.getDeliveryPolicies();

        model.addAttribute("deliveryPolicies", deliveryPolicies);
        return "admin/policy/delivery/main";
    }

    @GetMapping("/{id}")
    public String getDeliveryPolicyUpdateForm(@PathVariable("id") Long id,
                                              Model model) {
        DeliveryPolicyResponseDto deliveryPolicy = deliveryPolicyService.getDeliveryPolicy(id);

        model.addAttribute("deliveryPolicy", deliveryPolicy);
        return "admin/policy/delivery/update";
    }


    /**
     * 배송비 정책 생성 폼을 요청하는 메서드입니다.
     *
     * @return 배송비 생성 폼 View
     */
    @GetMapping("/create")
    public String getDeliveryPolicyCreateForm() {
        return "admin/policy/delivery/create";
    }

    /**
     * 배송비 정책 생성을 요청하는 메서드입니다.
     *
     * @param createDeliveryPolicy 생성 요청된 배송비 정책 DTO
     * @return 배송비 정책 메인 View
     */
    @PostMapping
    public String createDeliveryPolicy(@Valid DeliveryPolicyCreateRequestDto createDeliveryPolicy) {

        deliveryPolicyService.createDeliveryPolicy(createDeliveryPolicy);
        return REDIRECT_DELIVERY_POLICY_URL;
    }

    /**
     * 배송비 정책 수정을 요청하는 메서드입니다.
     *
     * @param id                   수정할 배송비 정책 ID
     * @param updateDeliveryPolicy 수정 요청된 배송비 정책 DTO
     * @return 배송비 정책 메인 View
     */
    @PutMapping("/{id}")
    public String updateDeliveryPolicy(@PathVariable("id") Long id,
                                       @Valid DeliveryPolicyUpdateRequestDto updateDeliveryPolicy) {

        deliveryPolicyService.updateDeliveryPolicy(id, updateDeliveryPolicy);
        return REDIRECT_DELIVERY_POLICY_URL;
    }

}
