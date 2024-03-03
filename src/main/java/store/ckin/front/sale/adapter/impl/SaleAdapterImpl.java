package store.ckin.front.sale.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import store.ckin.front.config.GatewayProperties;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.adapter.SaleAdapter;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;

/**
 * 주문 어댑터 구현 클래스.
 *
 * @author 정승조
 * @version 2024. 02. 27.
 */

@Component
@RequiredArgsConstructor
public class SaleAdapterImpl implements SaleAdapter {

    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private static final String COUPON_URL = "/coupon";

    private static final String SALE_URL = "/api/sales";


    /**
     * {@inheritDoc}
     *
     * @param memberId 주문하는 회원 ID
     * @param bookId 주문할 도서 ID 리스트
     * @return 적용 가능한 모든 쿠폰 리스트
     */
    @Override
    public List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId) {

        HttpEntity<List<GetCouponResponseDto>> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<GetCouponResponseDto>> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + COUPON_URL + "/sale?memberId={memberId}" + buildBookIds(bookId),
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param requestDto 주문 생성 요청 DTO
     * @return 생성된 주문 ID
     */
    @Override
    public Long requestCreateSale(SaleCreateRequestDto requestDto) {
        HttpEntity<SaleCreateRequestDto> requestEntity = new HttpEntity<>(requestDto, getHttpHeaders());

        ResponseEntity<Long> exchange = restTemplate.exchange(gatewayProperties.getGatewayUri() + SALE_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @return 주문 응답 DTO 리스트
     */
    @Override
    public List<SaleResponseDto> requestGetSales() {

        HttpEntity<List<SaleResponseDto>> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<List<SaleResponseDto>> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }

    private String buildBookIds(List<Long> bookIds) {
        StringBuilder query = new StringBuilder();

        for (Long bookId : bookIds) {
            query.append("&bookId=").append(bookId);
        }

        return query.toString();
    }
}
