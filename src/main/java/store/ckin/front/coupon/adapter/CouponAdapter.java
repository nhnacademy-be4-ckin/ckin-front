package store.ckin.front.coupon.adapter;

import org.springframework.data.domain.Pageable;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * PointPolicyAdapter
 *
 * @author 이가은 *
 * @version 2024. 02. 20.
 */
public interface CouponAdapter {

    /**
     * 쿠폰 리스트 조회를 요청하는 메서드입니다.
     *
     * @param pageable 페이지 정보
     * @return 쿠폰 리스트 DTO
     */
    PageDto<GetCouponResponseDto> getCouponAllList(Pageable pageable);

    /**
     * 쿠폰 조회를 요청하는 메서드입니다.
     *
     * @param couponId 쿠폰 아이디
     * @return 쿠폰 DTO
     */
    GetCouponResponseDto getCouponByCouponId(Long couponId);

    /**
     * 쿠폰 조회를 타입별로 요청하는 메서드입니다.
     *
     * @param typeId 쿠폰 템플릿 타입 아이디
     * @return 쿠폰 목록 DTO
     */
    PageDto<GetCouponResponseDto> getCouponList(Pageable pageable, Long typeId);

    /**
     * 쿠폰 조회를 회원별로 요청하는 메서드입니다.
     *
     * @param memberId 회원 아이디
     * @return 쿠폰 목록 DTO
     */
    PageDto<GetCouponResponseDto> getCouponByMemberId(Pageable pageable, Long memberId);

    boolean createCouponByIds(Long memberId, Long couponTemplateId);
}
