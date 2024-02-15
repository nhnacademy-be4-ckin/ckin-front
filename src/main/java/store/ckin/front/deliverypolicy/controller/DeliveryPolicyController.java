package store.ckin.front.deliverypolicy.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.deliverypolicy.dto.request.DeliveryPolicyCreateRequestDto;
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



    @GetMapping
    public String getDeliveryPolicies(Model model) {
        List<DeliveryPolicyResponseDto> deliveryPolicies = deliveryPolicyService.getDeliveryPolicies();

        model.addAttribute("deliveryPolicies", deliveryPolicies);
        return "admin/delivery-policy/main";
    }


    @GetMapping("/create")
    public String getDeliveryPolicyCreateForm() {
        return "admin/delivery-policy/create";
    }

    @PostMapping
    public String createDeliveryPolicy(@Valid DeliveryPolicyCreateRequestDto createDeliveryPolicy) {
        log.info("createDeliveryPolicy = {}", createDeliveryPolicy);
        deliveryPolicyService.createDeliveryPolicy(createDeliveryPolicy);

        return "redirect:/admin/policy/delivery";
    }

}
