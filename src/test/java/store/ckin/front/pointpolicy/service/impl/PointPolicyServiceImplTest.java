package store.ckin.front.pointpolicy.service.impl;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

import java.util.List;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import store.ckin.front.pointpolicy.adapter.PointPolicyAdapter;
import store.ckin.front.pointpolicy.dto.request.PointPolicyCreateRequestDto;
import store.ckin.front.pointpolicy.dto.request.PointPolicyUpdateRequestDto;
import store.ckin.front.pointpolicy.dto.response.PointPolicyResponseDto;

/**
 * 포인트 정책 서비스 테스트 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 16.
 */

@ExtendWith(MockitoExtension.class)
class PointPolicyServiceImplTest {

    @InjectMocks
    PointPolicyServiceImpl pointPolicyService;

    @Mock
    PointPolicyAdapter pointPolicyAdapter;


    @Test
    @DisplayName("포인트 정책 생성")
    void testCreatePointPolicy() {

        PointPolicyCreateRequestDto pointPolicy = new PointPolicyCreateRequestDto(1L, "정책1", 300);

        pointPolicyService.createPointPolicy(pointPolicy);

        Mockito.verify(pointPolicyAdapter, Mockito.times(1)).requestCreatePointPolicy(any());
    }

    @Test
    @DisplayName("포인트 정책 조회 - 모든 정책 리스트")
    void testGetPointPolicies() {

        List<PointPolicyResponseDto> pointPolicies =
                List.of(new PointPolicyResponseDto(1L, "정책1", 300),
                        new PointPolicyResponseDto(2L, "2번 정책", 5000));

        given(pointPolicyAdapter.requestPointPolicies())
                .willReturn(pointPolicies);

        List<PointPolicyResponseDto> actual = pointPolicyService.getPointPolicies();

        Assertions.assertAll(
                () -> assertEquals(2, actual.size()),
                () -> assertEquals(1L, actual.get(0).getPointPolicyId()),
                () -> assertEquals("정책1", actual.get(0).getPointPolicyName()),
                () -> assertEquals("2번 정책", actual.get(1).getPointPolicyName()),
                () -> assertEquals(5000, actual.get(1).getPointPolicyReserve()));

        verify(pointPolicyAdapter, times(1)).requestPointPolicies();
    }

    @Test
    @DisplayName("포인트 정책 조회 - ID 조회")
    void testGetPointPolicy() {
        PointPolicyResponseDto pointPolicy = new PointPolicyResponseDto(1L, "정책1", 300);

        given(pointPolicyAdapter.requestPointPolicy(anyLong()))
                .willReturn(pointPolicy);

        PointPolicyResponseDto actual = pointPolicyService.getPointPolicy(1L);

        Assertions.assertAll(
                () -> assertEquals(1L, actual.getPointPolicyId()),
                () -> assertEquals("정책1", actual.getPointPolicyName()),
                () -> assertEquals(300, actual.getPointPolicyReserve())
        );

        verify(pointPolicyAdapter, times(1)).requestPointPolicy(anyLong());
    }

    @Test
    @DisplayName("포인트 정책 삭제")
    void testDeletePointPolicy() {

        pointPolicyService.deletePointPolicy(1L);

        verify(pointPolicyAdapter, times(1)).requestDeletePointPolicy(anyLong());
    }

    @Test
    @DisplayName("포인트 정책 수정")
    void testUpdatePointPolicy() {
        PointPolicyUpdateRequestDto pointPolicy = new PointPolicyUpdateRequestDto(1L, "정책1", 300);

        pointPolicyService.updatePointPolicy(pointPolicy);

        verify(pointPolicyAdapter, times(1)).requestUpdatePointPolicy(any());
    }

}