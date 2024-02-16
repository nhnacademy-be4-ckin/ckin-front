package store.ckin.front.admin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 관리자 인덱스 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 08.
 */

@Controller
@RequestMapping("/admin")
public class AdminIndexController {

    @GetMapping
    public String getAdminIndex() {
        return "admin/index";
    }
}
