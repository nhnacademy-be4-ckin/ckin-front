package store.ckin.front.deliverypolicy.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyUpdateRequestDto;
import store.ckin.front.deliverypolicy.dto.response.DeliveryPolicyResponseDto;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;

/**
 * 배송 정책 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 09.
 */

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/delivery")
public class DeliveryPolicyController {

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
        return "admin/delivery-policy/main";
    }

    @GetMapping("{id}")
    public String getDeliveryPolicyUpdateForm(@PathVariable("id") Long id,
                                    Model model) {
        DeliveryPolicyResponseDto deliveryPolicy = deliveryPolicyService.getDeliveryPolicy(id);

        model.addAttribute("deliveryPolicy", deliveryPolicy);
        return "admin/delivery-policy/update";
    }


    /**
     * 배송비 정책 생성 폼을 요청하는 메서드입니다.
     *
     * @return 배송비 생성 폼 View
     */
    @GetMapping("/create")
    public String getDeliveryPolicyCreateForm() {
        return "admin/delivery-policy/create";
    }

    /**
     * 배송비 정책 생성을 요청하는 메서드입니다.
     *
     * @param createDeliveryPolicy 생성 요청된 배송비 정책 DTO
     * @return 배송비 정책 메인 View
     */
    @PostMapping
    public String createDeliveryPolicy(@Valid DeliveryPolicyCreateRequestDto createDeliveryPolicy) {
        log.info("createDeliveryPolicy = {}", createDeliveryPolicy);
        deliveryPolicyService.createDeliveryPolicy(createDeliveryPolicy);

        return "redirect:/admin/policy/delivery";
    }

    @PutMapping("{id}")
    public String updateDeliveryPolicy(@PathVariable("id") Long id,
                                      @Valid DeliveryPolicyUpdateRequestDto updateDeliveryPolicy) {

        log.info("updateDeliveryPolicy = {}", updateDeliveryPolicy);
        deliveryPolicyService.updateDeliveryPolicy(id, updateDeliveryPolicy);

        return "redirect:/admin/policy/delivery";
    }

}
