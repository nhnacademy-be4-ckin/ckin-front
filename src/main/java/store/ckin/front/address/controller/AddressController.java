package store.ckin.front.address.controller;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import store.ckin.front.address.domain.response.MemberAddressResponseDto;
import store.ckin.front.address.service.AddressService;

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
}
