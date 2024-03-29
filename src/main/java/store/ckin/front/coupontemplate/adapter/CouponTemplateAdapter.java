package store.ckin.front.coupontemplate.adapter;

import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * CouponTemplateAdapter
 *
 * @author : gaeun
 * @version : 2024. 02. 17
 */
public interface CouponTemplateAdapter {

    /**
     * 쿠폰 템플릿 리스트 조회를 요청하는 메서드입니다.
     *
     * @param pageable 페이지 정보
     * @param typeId   쿠폰 템플릿 타입 ID
     * @return 쿠폰 템플릿 리스트
     */
    PageDto<GetCouponTemplateResponseDto> getCouponTemplateList(Pageable pageable, Long typeId);

    /**
     * 쿠폰 템플릿을 등록하는 메서드입니다.
     *
     * @param couponPolicyRequestDto 쿠폰 정책 요청 DTO
     */
    void createCouponTemplate(CreateCouponTemplateRequestDto couponPolicyRequestDto);

    /**
     * 쿠폰 템플릿을 삭제하는 메서드입니다.
     *
     * @param templateId 쿠폰 템플릿 ID
     */
    void deleteCouponTemplate(Long templateId);

    /**
     * 쿠폰 템플릿의 상태를 변경하는 메서드 입니다.
     *
     * @param templateId 템플릿 아이디
     * @param state      쿠폰 템플릿 사용 여부
     */
    void updateCouponTemplateStatus(Long templateId, Boolean state);
}
