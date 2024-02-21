package store.ckin.front.couponpolicy.service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;

import java.util.List;

/**
 * CouponPolicyService
 *
 * @author 이가은
 * @version 2024. 02. 15.
 */
public interface CouponPolicyService {

    /**
     * 쿠폰 정책 리스트를 조회하는 메서드입니다.
     *
     * @return 쿠폰 정책 리스트
     */
    List<GetCouponPolicyResponseDto> getCouponPolicies();

    void createCouponPolicy(CreateCouponPolicyRequestDto couponPolicyRequestDto);
}
