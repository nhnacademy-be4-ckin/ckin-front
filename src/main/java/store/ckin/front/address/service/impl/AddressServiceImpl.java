package store.ckin.front.address.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.address.adapter.AddressAdapter;
import store.ckin.front.address.domain.request.AddressAddRequestDto;
import store.ckin.front.address.domain.request.AddressUpdateRequestDto;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;
import store.ckin.front.address.service.AddressService;

/**
 * AddressService 의 구현체 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
@Service
@RequiredArgsConstructor
public class AddressServiceImpl implements AddressService {
    private final AddressAdapter addressAdapter;

    @Override
    public void addAddress(Long memberId, AddressAddRequestDto addressAddRequestDto) {
        addressAdapter.addAddress(memberId, addressAddRequestDto);
    }

    @Override
    public List<MemberAddressResponseDto> getMemberAddressList(Long memberId) {
        return addressAdapter.getMemberAddressList(memberId);
    }

    @Override
    public void updateAddress(Long memberId, Long addressId, AddressUpdateRequestDto addressUpdateRequestDto) {
        addressAdapter.updateAddress(memberId, addressId, addressUpdateRequestDto);
    }

    @Override
    public void setDefaultAddress(Long memberId, Long addressId) {
        addressAdapter.setDefaultAddress(memberId, addressId);
    }

    @Override
    public void deleteAddress(Long memberId, Long addressId) {
        addressAdapter.deleteAddress(memberId, addressId);
    }
}
