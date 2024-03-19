package store.ckin.front.address.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import store.ckin.front.address.domain.request.AddressAddRequestDto;
import store.ckin.front.address.domain.request.AddressUpdateRequestDto;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;
import store.ckin.front.address.service.AddressService;

import javax.validation.Valid;

/**
 * Address 에 관련된 페이지를 호출하는 Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
@Controller
@RequiredArgsConstructor
public class AddressController {
    private final AddressService addressService;

    private Long getMemberId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return Long.parseLong(authentication.getName());
    }

    /**
     * 주문 페이지에서 주소 목록을 가져올 때 호출되는 메서드 입니다.
     */
    @GetMapping("/sale/address/list")
    public String getSaleAddressList(Model model) {
        List<MemberAddressResponseDto> addressList = addressService.getMemberAddressList(getMemberId());

        model.addAttribute("addressList", addressList);

        return "address/sale-main";
    }

    /**
     * 주문 페이지에서 주소를 추가할 때 호출되는 메서드 입니다.
     */
    @PostMapping("/sale/address/add")
    public String addAddressInSale(@Valid @ModelAttribute AddressAddRequestDto addressAddRequestDto) {
        addressService.addAddress(getMemberId(), addressAddRequestDto);

        return "redirect:/sale/address/list";
    }

    @GetMapping("/sale/address/update/{addressId}")
    public String getUpdateAddressInSale(@PathVariable("addressId") Long addressId,
                                         Model model) {
        List<MemberAddressResponseDto> addressList = addressService.getMemberAddressList(getMemberId());
        addressList.stream()
                .filter(responseDto -> responseDto.getAddressId().equals(addressId))
                .findFirst()
                .ifPresent(address -> model.addAttribute("address", address));

        return "address/sale-update";
    }

    /**
     * 주문 페이지에서 주소를 수정할 때 호출되는 메서드 입니다.
     */
    @PutMapping("/sale/address/update/{addressId}")
    public String updateAddressInSale(@PathVariable("addressId") Long addressId,
                                      @Valid @ModelAttribute AddressUpdateRequestDto addressUpdateRequestDto) {
        addressService.updateAddress(getMemberId(), addressId, addressUpdateRequestDto);

        return "redirect:/sale/address/list";
    }

    /**
     * 주문 페이지에서 주소를 제거할 때 호출되는 메서드 입니다.
     */
    @DeleteMapping("/sale/address/delete/{addressId}")
    public String removeAddressInSale(@PathVariable("addressId") Long addressId) {
        addressService.deleteAddress(getMemberId(), addressId);

        return "redirect:/sale/address/list";
    }
}
