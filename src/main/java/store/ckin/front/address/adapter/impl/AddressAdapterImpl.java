package store.ckin.front.address.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.net.URI;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.address.adapter.AddressAdapter;
import store.ckin.front.address.domain.request.AddressAddRequestDto;
import store.ckin.front.address.domain.request.AddressUpdateRequestDto;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;
import store.ckin.front.config.properties.GatewayProperties;

/**
 * AddressAdapter 의 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
@Component
@RequiredArgsConstructor
public class AddressAdapterImpl implements AddressAdapter {
    private final RestTemplate restTemplate;

    private final GatewayProperties gatewayProperties;

    private final String ADDRESS_URL = "/api/members";

    @Override
    public void addAddress(Long memberId, AddressAddRequestDto addressAddRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<AddressAddRequestDto> requestEntity = new HttpEntity<>(addressAddRequestDto, headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(ADDRESS_URL)
                .queryParam("memberId", memberId)
                .path("/address")
                .encode()
                .build()
                .toUri();

        restTemplate.exchange(
                uri,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public List<MemberAddressResponseDto> getMemberAddressList(Long memberId) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(ADDRESS_URL)
                .queryParam("memberId", memberId)
                .path("/address")
                .encode()
                .build()
                .toUri();

        ResponseEntity<List<MemberAddressResponseDto>> responseEntity =
                restTemplate.exchange(
                    uri,
                    HttpMethod.GET,
                    requestEntity,
                    new ParameterizedTypeReference<>() {
                    });

        return responseEntity.getBody();
    }

    @Override
    public void updateAddress(Long memberId, Long addressId, AddressUpdateRequestDto addressUpdateRequestDto) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<AddressUpdateRequestDto> requestEntity = new HttpEntity<>(addressUpdateRequestDto, headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(ADDRESS_URL)
                .queryParam("memberId", memberId)
                .path("/addresses")
                .queryParam("addressId", addressId)
                .encode()
                .build()
                .toUri();

        restTemplate.exchange(
                uri,
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public void setDefaultAddress(Long memberId, Long addressId) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(ADDRESS_URL)
                .queryParam("memberId", memberId)
                .path("/addresses")
                .queryParam("addressId", addressId)
                .path("/default")
                .encode()
                .build()
                .toUri();

        restTemplate.exchange(
                uri,
                HttpMethod.PUT,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public void deleteAddress(Long memberId, Long addressId) {
        HttpHeaders headers = new HttpHeaders(getHttpHeaders());
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(ADDRESS_URL)
                .queryParam("memberId", memberId)
                .path("/addresses")
                .queryParam("addressId", addressId)
                .encode()
                .build()
                .toUri();

        restTemplate.exchange(
                uri,
                HttpMethod.DELETE,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }
}
