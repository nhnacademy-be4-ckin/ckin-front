package store.ckin.front.cart.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.net.URI;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.cart.adapter.CartAdapter;
import store.ckin.front.cart.dto.request.CartCreateRequestDto;
import store.ckin.front.cart.dto.response.CartIdResponseDto;
import store.ckin.front.cart.exception.CartNotFoundException;
import store.ckin.front.config.properties.GatewayProperties;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 27
 */
@Component
@RequiredArgsConstructor
public class CartAdapterImpl implements CartAdapter {
    private final RestTemplate restTemplate;
    private final GatewayProperties gatewayProperties;
    private static final String CART_URL = "/api/cart";

    @Override
    public void insertCart(CartCreateRequestDto cartCreateRequestDto) {
        HttpEntity<CartCreateRequestDto> requestEntity = new HttpEntity<>(cartCreateRequestDto, getHttpHeaders());

        restTemplate.exchange(gatewayProperties.getGatewayUri() + CART_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });
    }

    @Override
    public CartIdResponseDto selectCartIdByMemberId(Long memberId) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());
        URI uri = UriComponentsBuilder
                .fromUriString(gatewayProperties.getGatewayUri())
                .path(CART_URL)
                .queryParam("memberId", memberId)
                .encode().build().toUri();

        HttpStatus status;
        try {
            ResponseEntity<CartIdResponseDto> exchange = restTemplate.exchange(uri,
                    HttpMethod.GET,
                    requestEntity,
                    new ParameterizedTypeReference<>() {
                    });
            return exchange.getBody();
        } catch (HttpClientErrorException e) {
            status = e.getStatusCode();
            if (e.getStatusCode() == HttpStatus.NOT_FOUND) {
                throw new CartNotFoundException();
            }
        }
        throw new HttpClientErrorException(status);
    }
}
