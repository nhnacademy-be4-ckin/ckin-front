package store.ckin.front.coupontemplate.service;

import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateInfoDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */

public interface CouponTemplateService {

    /**
     * 쿠폰 템플릿 목록을 조회하는 메서드 입니다.
     *
     * @param pageable 페이지 정보
     * @param typeId   쿠폰 템플릿 타입 ID
     * @return 쿠폰 템플릿 리스트
     */
    PageDto<GetCouponTemplateResponseDto> getCouponTemplateList(Pageable pageable, Long typeId);

    //삭제 예정
//    void createCouponTemplate(CreateCouponTemplateRequestDto couponTemplateRequestDto);

    /**
     * 쿠폰 템플릿을 삭제하는 메서드 입니다.
     *
     * @param templateId 쿠폰 템플릿 ID
     */
    void deleteCouponTemplate(Long templateId);

    /**
     * 쿠폰 템플릿을 생성하는 메서드 입니다.
     *
     * @param couponTemplateInfoDto 쿠폰 템플릿을 생성할 정보
     * @return 쿠폰 템플릿 목록 페이지로 리다이렉트
     */
    void createCouponTemplate(CreateCouponTemplateInfoDto couponTemplateInfoDto);

    /**
     * 쿠폰 템플릿의 상태를 변경하는 메서드 입니다.
     *
     * @param templateId 템플릿 아이디
     * @param state      쿠폰 템플릿 사용 여부
     * @return 쿠폰 템플릿 목록 페이지로 이동
     */
    void updateCouponTemplateStatus(Long templateId, Boolean state);
}

