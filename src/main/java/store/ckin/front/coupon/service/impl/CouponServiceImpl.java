package store.ckin.front.coupon.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.coupon.adapter.CouponAdapter;
import store.ckin.front.coupon.dto.request.CreateCouponRequestDto;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * CouponPolicyServiceImpl
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */

@Service
@RequiredArgsConstructor
public class CouponServiceImpl implements CouponService {

    private final CouponAdapter couponAdapter;

    @Override
    public PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable) {
        return couponAdapter.getCouponAllList(pageable);
    }

    @Override
    public GetCouponResponseDto getCouponByCouponId(Long couponId) {
        return couponAdapter.getCouponByCouponId(couponId);
    }

    @Override
    public PageDto<GetCouponResponseDto> getBirthCouponList(Pageable pageable) {
        return couponAdapter.getBirthCouponList(pageable);
    }

    @Override
    public PageDto<GetCouponResponseDto> getBookCouponList(Pageable pageable) {
        return couponAdapter.getBookCouponList(pageable);
    }

    @Override
    public PageDto<GetCouponResponseDto> getCategoryCouponList(Pageable pageable) {
        return couponAdapter.getCategoryCouponList(pageable);

    }

    @Override
    public PageDto<GetCouponResponseDto> getCouponByMemberId(Pageable pageable, Long memberId) {
        return couponAdapter.getCouponByMemberId(pageable, memberId);
    }
}
