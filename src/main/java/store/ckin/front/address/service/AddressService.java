package store.ckin.front.address.service;

import java.util.List;
import store.ckin.front.address.domain.request.AddressAddRequestDto;
import store.ckin.front.address.domain.request.AddressUpdateRequestDto;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;

/**
 * Address 관련 서비스에 대한 내부 로직을 처리하는 Service Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
public interface AddressService {
    void addAddress(Long memberId, AddressAddRequestDto addressAddRequestDto);

    List<MemberAddressResponseDto> getMemberAddressList(Long memberId);

    void updateAddress(Long memberId, Long addressId, AddressUpdateRequestDto addressUpdateRequestDto);

    void setDefaultAddress(Long memberId, Long addressId);

    void deleteAddress(Long memberId, Long addressId);
}
