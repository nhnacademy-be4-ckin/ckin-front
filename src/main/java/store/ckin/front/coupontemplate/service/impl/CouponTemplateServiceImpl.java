package store.ckin.front.coupontemplate.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.coupontemplate.adapter.CouponTemplateAdapter;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

/**
 * CouponTemplateServiceImpl
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */
@Service
@RequiredArgsConstructor
public class CouponTemplateServiceImpl implements CouponTemplateService {

    private final CouponTemplateAdapter couponTemplateAdapter;

    /**
     * {@inheritDoc}
     *
     * @param pageable 페이지 정보
     * @param typeId   쿠폰 템플릿 타입
     * @return 쿠폰 템플릿 목록
     */
    @Override
    public PageDto<GetCouponTemplateResponseDto> getCouponTemplateList(Pageable pageable, Long typeId) {
        return couponTemplateAdapter.getCouponTemplateList(pageable, typeId);
    }

    /**
     * {@inheritDoc}
     *
     * @param couponTemplateRequestDto 쿠폰 템플릿 요청 DTO
     */
    @Override
    public void createCouponTemplate(CreateCouponTemplateRequestDto couponTemplateRequestDto) {
        couponTemplateAdapter.createCouponTemplate(couponTemplateRequestDto);
    }

    /**
     * {@inheritDoc}
     *
     * @param templateId 쿠폰 템플릿 ID
     */
    @Override
    public void deleteCouponTemplate(Long templateId) {
        couponTemplateAdapter.deleteCouponTemplate(templateId);
    }


}