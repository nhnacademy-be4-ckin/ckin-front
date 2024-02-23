package store.ckin.front.coupon.service;

import org.springframework.data.domain.Pageable;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * CouponPolicyService
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */
public interface CouponService {

    /**
     * 쿠폰 목록을 가져오는 메서드 입니다.
     *
     * @param pageable
     * @return 쿠폰 목록 리스트
     */
    PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable);

    /**
     * 쿠폰 ID에 해당하는 쿠폰 목록을 가져오는 메서드 입니다.
     *
     * @param couponId 쿠폰 아이디를 가지는 경우 해당 쿠폰 아이디만 보여줍니다.
     * @return 쿠폰 목록 리스트
     */
    GetCouponResponseDto getCouponByCouponId(Long couponId);

    /**
     * 쿠폰 목록을 타입별로 가져오는 메서드 입니다.
     *
     * @param pageable
     * @param typeId   쿠폰 템플릿 타입 아이디
     * @return 쿠폰 목록 DTO
     */
    PageDto<GetCouponResponseDto> getCouponList(Pageable pageable, Long typeId);

    /**
     * 쿠폰 목록을 멤버별로 가져오는 메서드 입니다.
     *
     * @param pageable
     * @param memberId 회원 ID
     * @return 쿠폰 목록 DTO
     */
    PageDto<GetCouponResponseDto> getCouponByMemberId(Pageable pageable, Long memberId);
}