package store.ckin.front.pointpolicy.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 포인트 정책 응답 DTO.
 *
 * @author 정승조
 * @version 2024. 02. 13.
 */

@Getter
@AllArgsConstructor
public class PointPolicyResponseDto {

    private Long pointPolicyId;

    private String pointPolicyName;

    private Integer pointPolicyReserve;
}
