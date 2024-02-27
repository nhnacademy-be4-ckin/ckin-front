package store.ckin.front.sale.facade;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import store.ckin.front.couponpolicy.service.CouponPolicyService;
import store.ckin.front.deliverypolicy.service.DeliveryPolicyService;
import store.ckin.front.packaging.service.PackagingService;
import store.ckin.front.sale.dto.SalePolicyDto;

/**
 * 주문 퍼사드 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Component
@RequiredArgsConstructor
public class SaleFacade {

    private final CouponPolicyService couponPolicyService;

    private final PackagingService packagingService;

    private final DeliveryPolicyService deliveryPolicyService;


    public SalePolicyDto getPolicyList() {
        return SalePolicyDto.builder()
                .deliveryPolicy(deliveryPolicyService.getActiveDeliveryPolicy())
                .packagingPolicies(packagingService.getPackagingPolicies())
                .build();
    }

}
