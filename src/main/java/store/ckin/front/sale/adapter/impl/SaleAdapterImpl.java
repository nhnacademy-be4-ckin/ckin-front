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
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.sale.adapter.SaleAdapter;
import store.ckin.front.sale.dto.request.SaleCreateRequestDto;
import store.ckin.front.sale.dto.request.SaleDeliveryUpdateRequestDto;
import store.ckin.front.sale.dto.response.SaleDetailResponseDto;
import store.ckin.front.sale.dto.response.SaleInfoResponseDto;
import store.ckin.front.sale.dto.response.SaleResponseDto;
import store.ckin.front.sale.dto.response.SaleWithBookResponseDto;

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
     * @param bookId   주문할 도서 ID 리스트
     * @return 적용 가능한 모든 쿠폰 리스트
     */
    @Override
    public List<GetCouponResponseDto> requestCouponsByMemberId(Long memberId, List<Long> bookId) {

        HttpEntity<List<GetCouponResponseDto>> requestEntity = new HttpEntity<>(getHttpHeaders());

        String requestUrl =
                UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + COUPON_URL + "/sale")
                        .queryParam("memberId", memberId)
                        .queryParam("bookId", bookId)
                        .encode()
                        .toUriString();

        ResponseEntity<List<GetCouponResponseDto>> exchange = restTemplate.exchange(
                requestUrl,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param requestDto 주문 생성 요청 DTO
     * @return 생성된 주문 ID
     */
    @Override
    public String requestCreateSale(SaleCreateRequestDto requestDto) {
        HttpEntity<SaleCreateRequestDto> requestEntity = new HttpEntity<>(requestDto, getHttpHeaders());

        ResponseEntity<String> exchange = restTemplate.exchange(gatewayProperties.getGatewayUri() + SALE_URL,
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
    public PagedResponse<List<SaleResponseDto>> requestGetSales(Integer page, Integer size) {

        HttpEntity<List<SaleResponseDto>> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<PagedResponse<List<SaleResponseDto>>> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "?page={page}&size={size}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, page, size);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param saleId 조회할 주문 ID
     * @return 주문 응답 DTO
     */
    @Override
    public SaleDetailResponseDto requestGetSaleDetail(Long saleId) {

        HttpEntity<Long> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<SaleDetailResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "/{saleId}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, saleId);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param saleNumber 조회할 주문 번호 (UUID)
     * @return 주문과 관련된 도서 정보 응답 DTO
     */
    @Override
    public SaleWithBookResponseDto requestGetSaleWithBooks(String saleNumber) {
        HttpEntity<SaleWithBookResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<SaleWithBookResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "/{saleNumber}/books",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, saleNumber);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param saleNumber 조회할 주문 번호 (UUID)
     * @return 결제 정보 응답 DTO
     */
    @Override
    public SaleInfoResponseDto requestGetPaymentInfo(String saleNumber) {

        HttpEntity<SaleInfoResponseDto> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<SaleInfoResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "/{saleNumber}/paymentInfo",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, saleNumber);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param memberId 조회할 회원 ID
     * @return 해당 회원이 주문한 페이징 처리된 주문 내역
     */
    @Override
    public PagedResponse<List<SaleInfoResponseDto>> requestGetSalesByMemberId(String memberId,
                                                                              Integer page,
                                                                              Integer size) {

        HttpEntity<Long> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<PagedResponse<List<SaleInfoResponseDto>>> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "/member/{memberId}?page={page}&size={size}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, memberId, page, size);

        return exchange.getBody();
    }

    @Override
    public SaleDetailResponseDto requestGetGuestSaleDetailBySaleNumber(String saleNumber, String ordererContact) {

        HttpEntity<String> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<SaleDetailResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL
                        + "/guest?saleNumber={saleNumber}&ordererContact={ordererContact}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, saleNumber, ordererContact);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param saleNumber 주문 번호
     * @param memberId   회원 ID
     * @return 주문 상세 정보 응답 DTO
     */
    @Override
    public SaleDetailResponseDto requestGetMemberSaleDetailBySaleNumber(String saleNumber, String memberId) {

        HttpEntity<String> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<SaleDetailResponseDto> exchange = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL
                        + "/member?saleNumber={saleNumber}&memberId={memberId}",
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                }, saleNumber, memberId);

        return exchange.getBody();
    }

    /**
     * {@inheritDoc}
     *
     * @param saleId         주문 ID
     * @param deliveryStatus 배송 상태
     */
    @Override
    public void requestUpdateDeliveryStatus(Long saleId, SaleDeliveryUpdateRequestDto deliveryStatus) {

        HttpEntity<SaleDeliveryUpdateRequestDto> requestEntity = new HttpEntity<>(deliveryStatus, getHttpHeaders());

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "/{saleId}/delivery/status",
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                }, saleId);
    }

    /**
     * {@inheritDoc}
     *
     * @param saleId 주문 ID
     */
    @Override
    public void requestCancelSale(Long saleId) {

        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        restTemplate.exchange(
                gatewayProperties.getGatewayUri() + SALE_URL + "/{saleId}/cancel",
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                }, saleId);
    }
}
