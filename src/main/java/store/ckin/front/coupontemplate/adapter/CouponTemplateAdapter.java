package store.ckin.front.coupontemplate.adapter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * CouponTemplateAdapter:
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */
public interface CouponTemplateAdapter {

    /**
     * 쿠폰 정책 리스트 조회를 요청하는 메서드입니다.
     *
     * @return 쿠폰 정책 리스트
     */
    PageDto<GetCouponTemplateResponseDto> getBirthCouponTemplateList(Pageable pageable);

    /**
     * 쿠폰을 등록하는 메서드입니다.
     *
     */
    void createCouponTemplate(CreateCouponTemplateRequestDto couponPolicyRequestDto);
}