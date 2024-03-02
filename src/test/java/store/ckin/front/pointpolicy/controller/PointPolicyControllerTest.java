package store.ckin.front.pointpolicy.controller;


import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;
import store.ckin.front.pointpolicy.service.PointPolicyService;

/**
 * 포인트 정책 컨트롤러 테스트 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 16.
 */

@WebMvcTest(PointPolicyController.class)
class PointPolicyControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    PointPolicyService pointPolicyService;

    List<PointPolicyResponseDto> pointPolicies;


    @BeforeEach
    void setUp() {
        pointPolicies = List.of(
                new PointPolicyResponseDto(1L, "포인트 정책 1", 100),
                new PointPolicyResponseDto(2L, "포인트 정책 2", 200));

    }

    @Test
    @DisplayName("포인트 정책 등록 폼 요청")
    void testGetPointPolicyCreateForm() throws Exception {
        mockMvc.perform(get("/admin/policy/point/create"))
                .andExpect(status().isOk())
                .andExpect(view().name("admin/policy/point/create"));
    }

    @Test
    @DisplayName("포인트 정책 등록")
    void testCreatePointPolicy() throws Exception {

        mockMvc.perform(post("/admin/policy/point")
                        .param("pointPolicyId", "100")
                        .param("pointPolicyName", "회원가입")
                        .param("pointPolicyReserve", "5000"))
                .andExpect(status().is3xxRedirection())
                .andExpect(view().name("redirect:/admin/policy/point"));

        verify(pointPolicyService, times(1)).createPointPolicy(any());
    }

    @Test
    @DisplayName("전체 포인트 정책 조회")
    void testGetPointPolicies() throws Exception {

        mockMvc.perform(get("/admin/policy/point"))
                .andExpect(status().isOk())
                .andExpect(view().name("admin/policy/point/main"));

        verify(pointPolicyService, times(1)).getPointPolicies();
    }

    @Test
    @DisplayName("포인트 정책 수정 폼 조회")
    void testGetPointPolicyUpdateForm() throws Exception {

        PointPolicyResponseDto pointPolicy = new PointPolicyResponseDto(1L, "정책1", 5000);

        given(pointPolicyService.getPointPolicy(anyLong()))
                .willReturn(pointPolicy);

        mockMvc.perform(get("/admin/policy/point/{id}", 1L))
                .andExpect(status().isOk())
                .andExpect(model().attribute("pointPolicyId", 1L))
                .andExpect(model().attribute("pointPolicy", pointPolicy))
                .andExpect(view().name("admin/policy/point/update"));
    }

    @Test
    @DisplayName("포인트 정책 수정")
    void testUpdatePointPolicy() throws Exception {

        mockMvc.perform(put("/admin/policy/point/{id}", 1L)
                        .param("pointPolicyId", "100")
                        .param("pointPolicyName", "회원가입")
                        .param("pointPolicyReserve", "5000"))
                .andExpect(status().is3xxRedirection())
                .andExpect(view().name("redirect:/admin/policy/point"));
    }

    @Test
    @DisplayName("포인트 정책 삭제")
    void testDeletePointPolicy() throws Exception {

        mockMvc.perform(delete("/admin/policy/point/{id}", 1L))
                .andExpect(status().is3xxRedirection())
                .andExpect(view().name("redirect:/admin/policy/point"));
    }
}