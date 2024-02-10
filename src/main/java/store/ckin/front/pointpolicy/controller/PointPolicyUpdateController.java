package store.ckin.front.pointpolicy.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 포인트 정책 수정 페이지를 호출하는 컨트롤러입니다.
 *
 * @author 정승조
 * @version 2024. 02. 10.
 */

@Controller
@RequestMapping("/admin/policy/point/{id}/update")
public class PointPolicyUpdateController {

    @GetMapping
    public String getPointPolicyUpdate(@PathVariable("id") Long id) {

        return "admin/point-policy/update";
    }
}
