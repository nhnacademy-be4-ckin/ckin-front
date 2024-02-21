package store.ckin.front.coupon.service;
import org.springframework.data.domain.Pageable;
import store.ckin.front.coupon.dto.request.CreateCouponRequestDto;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * CouponPolicyService
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
public interface CouponService {

    /**
     * 쿠폰 정책 리스트를 조회하는 메서드입니다.
     *
     * @return 쿠폰 정책 리스트
     */
    PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable);
    GetCouponResponseDto getCouponByCouponId(Long couponId);

    PageDto<GetCouponResponseDto> getBirthCouponList(Pageable pageable);

    PageDto<GetCouponResponseDto> getBookCouponList(Pageable pageable);

    PageDto<GetCouponResponseDto> getCategoryCouponList(Pageable pageable);

    PageDto<GetCouponResponseDto> getCouponByMemberId(Pageable pageable, Long memberId);
}
