package store.ckin.front.coupontemplate.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */

public interface CouponTemplateService {

    /**
     * 쿠폰 정책 리스트를 조회하는 메서드입니다.
     *
     * @return 쿠폰 정책 리스트
     */
    PageDto<GetCouponTemplateResponseDto> getBirthCouponTemplateList(Pageable pageable);
    PageDto<GetCouponTemplateResponseDto> getBookCouponTemplateList(Pageable pageable);

    void createCouponTemplate(CreateCouponTemplateRequestDto couponTemplateRequestDto);
}

