package store.ckin.front.coupontemplate.service.impl;

import java.sql.Date;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.coupontemplate.adapter.CouponTemplateAdapter;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateInfoDto;
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
@Slf4j
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
     * @param templateId 쿠폰 템플릿 ID
     */
    @Override
    public void deleteCouponTemplate(Long templateId) {
        couponTemplateAdapter.deleteCouponTemplate(templateId);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void createCouponTemplate(CreateCouponTemplateInfoDto couponTemplateInfoDto) {
        CreateCouponTemplateRequestDto couponTemplateRequestDto = CreateCouponTemplateRequestDto.builder()
                .policyId(couponTemplateInfoDto.getPolicyId())
                .typeId(couponTemplateInfoDto.getTypeId())
                .name(couponTemplateInfoDto.getName())
                .amount(0L)
                .duration(couponTemplateInfoDto.getDuration())
                .expirationDate(("").equals(couponTemplateInfoDto.getExpirationDate()) ?
                        null : Date.valueOf(couponTemplateInfoDto.getExpirationDate()))
                .state(couponTemplateInfoDto.getState())
                .build();

        if (couponTemplateInfoDto.getTypeId() == 2) {
            couponTemplateRequestDto.updateBookId(couponTemplateInfoDto.getValue());
        }

        if (couponTemplateInfoDto.getTypeId() == 3) {
            couponTemplateRequestDto.updateCategoryId(couponTemplateInfoDto.getValue());
        }

        couponTemplateAdapter.createCouponTemplate(couponTemplateRequestDto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void updateCouponTemplateStatus(Long templateId, Boolean state) {
        couponTemplateAdapter.updateCouponTemplateStatus(templateId, state);
    }


}