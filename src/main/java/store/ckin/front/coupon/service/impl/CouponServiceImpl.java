package store.ckin.front.coupon.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import store.ckin.front.coupon.adapter.CouponAdapter;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

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

    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable) {
        return couponAdapter.getCouponAllList(pageable);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public GetCouponResponseDto getCouponByCouponId(Long couponId) {
        return couponAdapter.getCouponByCouponId(couponId);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<GetCouponResponseDto> getCouponList(Pageable pageable, Long typeId) {
        return couponAdapter.getCouponList(pageable, typeId);
    }


    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<GetCouponResponseDto> getCouponByMemberId(Pageable pageable, Long memberId) {
        return couponAdapter.getCouponByMemberId(pageable, memberId);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public boolean createCouponByIds(Long couponTemplateId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long memberId = Long.parseLong((authentication.getName()));

        return couponAdapter.createCouponByIds(memberId, couponTemplateId);
    }

    /**
     * {@inheritDoc}
     *
     * @param couponIds 사용한 쿠폰 ID 리스트
     */
    @Override
    public void updateCouponUsed(List<Long> couponIds) {
        couponAdapter.updateCouponUsed(couponIds);
    }

    @Override
    public PageDto<GetCouponResponseDto> getUnUsedCouponByMember(Pageable pageable, Long memberId) {
        return couponAdapter.getUnUsedCouponByMember(pageable, memberId);
    }

}
