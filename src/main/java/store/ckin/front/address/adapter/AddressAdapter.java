package store.ckin.front.address.adapter;

import java.util.List;
import store.ckin.front.address.domain.request.AddressAddRequestDto;
import store.ckin.front.address.domain.request.AddressUpdateRequestDto;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;

/**
 * API 와 통신하여 Address 를 처리하는 Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
public interface AddressAdapter {
    void addAddress(Long memberId, AddressAddRequestDto addressAddRequestDto);

    List<MemberAddressResponseDto> getMemberAddressList(Long memberId);

    void updateAddress(Long memberId, Long addressId, AddressUpdateRequestDto addressUpdateRequestDto);

    void setDefaultAddress(Long memberId, Long addressId);

    void deleteAddress(Long memberId, Long addressId);
}
