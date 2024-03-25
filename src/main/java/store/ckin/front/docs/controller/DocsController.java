package store.ckin.front.docs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Rest API 문서를 보여주는 컨트롤러 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 25.
 */

@Controller
public class DocsController {

    @GetMapping("/api-docs")
    public String getApiDocs() {
        return "api-docs";
    }

    @GetMapping("/coupon-docs")
    public String getCouponDocs() {
        return "coupon-docs";
    }

}
