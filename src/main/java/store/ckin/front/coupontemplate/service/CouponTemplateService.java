package store.ckin.front.coupontemplate.service;

import org.springframework.data.domain.Pageable;
import store.ckin.front.coupontemplate.dto.request.CreateCouponTemplateRequestDto;
import store.ckin.front.coupontemplate.dto.response.GetCouponTemplateResponseDto;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.sql.Date;
import java.time.LocalDate;

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
     * 쿠폰 템플릿을 등록하는 메서드 입니다.
     *
     * @param policyId 정책 아이디
     * @param bookId 도서 아이디 (널 가능)
     * @param categoryId 카테고리 아이디 (널 가능)
     * @param typeId 타입 아이디
     * @param duration 사용기한
     * @param expirationDate 만료일
     */
    void createCouponTemplate(Long policyId, Long bookId, Long categoryId, Long typeId, Long amount, Integer duration, Date expirationDate);
}

