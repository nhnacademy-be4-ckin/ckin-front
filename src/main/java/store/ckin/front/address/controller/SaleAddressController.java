package store.ckin.front.address.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.address.domain.request.AddressAddRequestDto;
import store.ckin.front.address.domain.request.AddressUpdateRequestDto;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;
import store.ckin.front.address.service.AddressService;

/**
 * 주문 결제 페이지에서 Address 에 관련된 페이지를 호출하는 Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/sale/address")
public class SaleAddressController {
    private final AddressService addressService;

    private Long getMemberId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return Long.parseLong(authentication.getName());
    }

    /**
     * 주문 페이지에서 주소 목록을 가져올 때 호출되는 메서드 입니다.
     */
    @GetMapping("/list")
    public String getSaleAddressList(Model model) {
        List<MemberAddressResponseDto> addressList = addressService.getMemberAddressList(getMemberId());

        model.addAttribute("addressList", addressList);

        return "address/sale-main";
    }

    /**
     * 주문 페이지에서 주소를 추가할 때 호출되는 메서드 입니다.
     */
    @PostMapping("/add")
    public String addAddress(@Valid @ModelAttribute AddressAddRequestDto addressAddRequestDto) {
        addressService.addAddress(getMemberId(), addressAddRequestDto);

        return "redirect:/sale/address/list";
    }

    /**
     * 주문 페이지에서 주소를 수정페이지를 호출하는 메서드 입니다.
     */
    @GetMapping("/update/{addressId}")
    public String getUpdateAddress(@PathVariable("addressId") Long addressId,
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
    @PutMapping("/update/{addressId}")
    public String updateAddress(@PathVariable("addressId") Long addressId,
                                @Valid @ModelAttribute AddressUpdateRequestDto addressUpdateRequestDto) {
        addressService.updateAddress(getMemberId(), addressId, addressUpdateRequestDto);

        return "redirect:/sale/address/list";
    }

    /**
     * 주문 페이지에서 주소를 제거할 때 호출되는 메서드 입니다.
     */
    @DeleteMapping("/delete/{addressId}")
    public String removeAddress(@PathVariable("addressId") Long addressId) {
        addressService.deleteAddress(getMemberId(), addressId);

        return "redirect:/sale/address/list";
    }

    /**
     * 기본 배송지로 변경할 때 호출되는 메서드 입니다.
     */
    @PutMapping("/{addressId}/default")
    public String setDefaultAddress(@PathVariable("addressId") Long addressId) {
        addressService.setDefaultAddress(getMemberId(), addressId);

        return "redirect:/sale/address/list";
    }
}
