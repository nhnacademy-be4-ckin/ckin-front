package store.ckin.front.coupontemplate.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.coupontemplate.adapter.CouponTemplateAdapter;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */
@Service
@RequiredArgsConstructor
public class CouponTemplateServiceImpl implements CouponTemplateService {

    private final CouponTemplateAdapter couponTemplateAdapter;

    @Override
    public PageDto<GetCouponTemplateResponseDto> getBirthCouponTemplateList(Pageable pageable) {
        return couponTemplateAdapter.getBirthCouponTemplateList(pageable);
    }

    @Override
    public PageDto<GetCouponTemplateResponseDto> getBookCouponTemplateList(Pageable pageable) {
        return couponTemplateAdapter.getBookCouponTemplateList(pageable);

    }

    @Override
    public PageDto<GetCouponTemplateResponseDto> getCategoryCouponTemplateList(Pageable pageable) {
        return couponTemplateAdapter.getCategoryCouponTemplateList(pageable);

    }

    @Override
    public void createCouponTemplate(CreateCouponTemplateRequestDto couponTemplateRequestDto) {
        couponTemplateAdapter.createCouponTemplate(couponTemplateRequestDto);
    }

    @Override
    public void deleteCouponTemplate(Long templateId) {
        couponTemplateAdapter.deleteCouponTemplate(templateId);
    }


}