package store.ckin.front.couponpolicy.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import store.ckin.front.couponpolicy.adapter.CouponPolicyAdapter;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.impl.CouponPolicyServiceImpl;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 16
 */

@ExtendWith(SpringExtension.class)
@Import(CouponPolicyServiceImpl.class)
class CouponPolicyServiceTest {
    CouponPolicyService couponPolicyService;

    @MockBean
    CouponPolicyAdapter couponPolicyAdapter;

    CreateCouponPolicyRequestDto couponPolicyRequestDto;
    GetCouponPolicyResponseDto couponPolicyResponseDto;

    @BeforeEach
    void setUp() {
        couponPolicyService = new CouponPolicyServiceImpl(couponPolicyAdapter);
        couponPolicyRequestDto = new CreateCouponPolicyRequestDto(1L, 10000, 3000, null, 10000);
        couponPolicyResponseDto = new GetCouponPolicyResponseDto(1L, 10000, 3000, null, 10000);
    }

    @Test
    @DisplayName("쿠폰 정책 목록 조회 테스트")
    void testGetCouponPolicies() {
        when(couponPolicyAdapter.getCouponPolicies()).thenReturn(List.of(couponPolicyResponseDto));

        couponPolicyService.getCouponPolicies();

        verify(couponPolicyAdapter, times(1))
                .getCouponPolicies();
    }

    @Test
    @DisplayName("쿠폰 정책 등록 테스트")
    void testCreateCouponPolicy() {
        couponPolicyService.createCouponPolicy(couponPolicyRequestDto);

        verify(couponPolicyAdapter, times(1))
                .createCouponPolicy(any());
    }
}