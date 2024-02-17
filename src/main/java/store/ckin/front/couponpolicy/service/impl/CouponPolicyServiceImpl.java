package store.ckin.front.couponpolicy.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.couponpolicy.adapter.CouponPolicyAdapter;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;

import java.util.List;

/**
 * CouponPolicyServiceImpl
 *
 * @author 이가은
 * @version 2024. 02. 15.
 */

@Service
@RequiredArgsConstructor
public class CouponPolicyServiceImpl implements CouponPolicyService {

    private final CouponPolicyAdapter couponPolicyAdapter;

    @Override
    public List<GetCouponPolicyResponseDto> getCouponPolicies() {
        return couponPolicyAdapter.getCouponPolicies();
    }

    @Override
    public void createCouponPolicy(CreateCouponPolicyRequestDto couponPolicyRequestDto) {
        couponPolicyAdapter.createCouponPolicy(couponPolicyRequestDto);
    }

}
