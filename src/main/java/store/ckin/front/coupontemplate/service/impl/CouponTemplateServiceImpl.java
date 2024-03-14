package store.ckin.front.coupontemplate.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.coupontemplate.adapter.CouponTemplateAdapter;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.coupontemplate.service.CouponTemplateService;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Objects;

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
    private final BookAdapter bookAdapter;
    private final CategoryAdapter categoryAdapter;

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

//    /**
//     * {@inheritDoc}
//     *
//     * @param couponTemplateRequestDto 쿠폰 템플릿 요청 DTO
//     */
//    @Override
//    public void createCouponTemplate(CreateCouponTemplateRequestDto couponTemplateRequestDto) {
//        if (Objects.nonNull(couponTemplateRequestDto.getDuration())) {
//            Date expirationDate = Date.valueOf(LocalDate.now().plusDays(couponTemplateRequestDto.getDuration()));
//            couponTemplateRequestDto.updateExpiration(expirationDate);
//        }
//        couponTemplateAdapter.createCouponTemplate(couponTemplateRequestDto);
//    }

    /**
     * {@inheritDoc}
     *
     * @param templateId 쿠폰 템플릿 ID
     */
    @Override
    public void deleteCouponTemplate(Long templateId) {
        couponTemplateAdapter.deleteCouponTemplate(templateId);
    }

    @Override
    public void createCouponTemplate(Long policyId, Long bookId, Long categoryId, Long typeId, Long amount, Integer duration, Date expirationDate) {
        CreateCouponTemplateRequestDto couponTemplateRequestDto = new CreateCouponTemplateRequestDto(policyId, bookId, categoryId, typeId, "", amount, duration, expirationDate);

        log.debug("duration: {}", duration);
        log.debug("expiration: {}", expirationDate);
        switch (typeId.intValue()) {
            case 1:
                couponTemplateRequestDto.updateName("생일쿠폰");
                break;
            case 2:
                BookResponseDto bookResponseDto = bookAdapter.findProductById(bookId);
                couponTemplateRequestDto.updateName(bookResponseDto.getBookTitle());
                break;
            case 3:
                String name = categoryAdapter.getCategoryName(categoryId);
                couponTemplateRequestDto.updateName(name);
                break;
        }

        if (Objects.nonNull(couponTemplateRequestDto.getDuration())) {
            Date realExpirationDate = Date.valueOf(LocalDate.now().plusDays(couponTemplateRequestDto.getDuration()));
            couponTemplateRequestDto.updateExpiration(realExpirationDate);
        }
        log.info(couponTemplateRequestDto.toString());
        couponTemplateAdapter.createCouponTemplate(couponTemplateRequestDto);
    }


}