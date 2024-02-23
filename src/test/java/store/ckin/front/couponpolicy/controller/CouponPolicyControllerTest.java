package store.ckin.front.couponpolicy.controller;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.redirectedUrl;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import store.ckin.front.couponpolicy.dto.request.CreateCouponPolicyRequestDto;
import store.ckin.front.couponpolicy.dto.response.GetCouponPolicyResponseDto;
import store.ckin.front.couponpolicy.service.CouponPolicyService;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 16
 */
@WebMvcTest(CouponPolicyController.class)
class CouponPolicyControllerTest {
    @Autowired
    MockMvc mockMvc;
    ObjectMapper objectMapper;

    @MockBean
    CouponPolicyService couponPolicyService;

    CreateCouponPolicyRequestDto couponPolicyRequestDto;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
        couponPolicyRequestDto = new CreateCouponPolicyRequestDto(1L, 10000, 3000, null, 10000);
    }

    @Test
    @DisplayName("쿠폰 정책 목록 조회 테스트")
    void testGetCouponPolicies() throws Exception {
        GetCouponPolicyResponseDto dto = new GetCouponPolicyResponseDto(1L, 10000, 3000, null, 10000);
        List<GetCouponPolicyResponseDto> request = List.of(dto);

        given(couponPolicyService.getCouponPolicies()).willReturn(request);

        mockMvc.perform(get("/admin/policy/coupon"))
                .andExpect(model().attribute("couponPolicies", request))
                .andExpect(view().name("admin/policy/coupon/main"))
                .andExpect(status().isOk());
    }

    @Test
    @DisplayName("쿠폰 정책 등록 테스트: 성공")
    void testCouponPolicyCreate_O() throws Exception {

        mockMvc.perform(post("/admin/policy/coupon")
                        .param("couponCodeId", "1")
                        .param("minOrderPrice", "10000")
                        .param("discountPrice", "3000")
                        .param("maxDiscountPrice", "10000"))
                .andExpect(status().is3xxRedirection())
                .andExpect(redirectedUrl("/admin/policy/coupon"))
                .andDo(print());
    }

    @Test
    @DisplayName("쿠폰 정책 등록 테스트: 실패")
    void testCouponPolicyCreate_X() throws Exception {

        mockMvc.perform(post("/admin/policy/coupon")
                        .param("minOrderPrice", "10000")
                        .param("discountPrice", "3000")
                        .param("maxDiscountPrice", "10000"))
                .andExpect(view().name("error"))
                .andDo(print());
    }
}