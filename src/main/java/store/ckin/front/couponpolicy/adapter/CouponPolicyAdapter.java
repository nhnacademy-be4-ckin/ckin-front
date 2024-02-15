package store.ckin.front.couponpolicy.adapter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
}
