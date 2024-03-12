package store.ckin.front.review.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

/**
 * ReviewRestController
 *
 * @author : gaeun
 * @version : 2024. 03. 12
 */
@RestController
@RequiredArgsConstructor
public class ReviewRestController {

    /**
     * 리뷰 작성의 접근 권한을 확인하는 메소드 입니다.
     */
    @GetMapping("/review/use")
    public String isPossibleReview() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (Objects.isNull(authentication.getCredentials())) {
            //TODO: 주문 기록이 있는지, 주문완료 상태
            //TODO: 이미 작성한 적이 있는지
            return "true";
        }
        return "false";
    }
}
