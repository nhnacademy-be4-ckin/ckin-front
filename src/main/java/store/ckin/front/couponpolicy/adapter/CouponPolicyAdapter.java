package store.ckin.front.couponpolicy.adapter;

import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;

import java.util.List;

/**
 * PointPolicyAdapter
 *
 * @author 이가은
 * @version 2024. 02. 12.
 */
public interface CouponPolicyAdapter {

    /**
     * 쿠폰 정책 리스트 조회를 요청하는 메서드입니다.
     *
     * @return 쿠폰 정책 리스트
     */
    List<GetCouponPolicyResponseDto> getCouponPolicies();

    /**
     * 쿠폰을 등록하는 메서드입니다.
     *
     * @param couponPolicyRequestDto 쿠폰 정책 요청 DTO
     */
    void createCouponPolicy(CreateCouponPolicyRequestDto couponPolicyRequestDto);
}
