package store.ckin.front.review.controller;

import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.review.dto.response.ReviewReportDto;
import store.ckin.front.review.service.ReviewService;
import store.ckin.front.sale.dto.response.SaleCheckResponseDto;
import store.ckin.front.sale.service.SaleService;

/**
 * ReviewRestController
 *
 * @author : gaeun
 * @version : 2024. 03. 12
 */
@RestController
@RequiredArgsConstructor
public class ReviewRestController {
    private final ReviewService reviewService;
    private final SaleService saleService;

    /**
     * 리뷰 작성의 접근 권한을 확인하는 메소드 입니다.
     */
    @GetMapping("/review/use/{bookId}")
    public String isPossibleReview(@PathVariable("bookId") String bookId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (!("anonymousUser").equals(authentication.getName())) {
            Long memberId = Long.valueOf(authentication.getName());
            SaleCheckResponseDto saleReportDto = saleService.checkSaleByMemberIdAndBookId(memberId, bookId);
            ReviewReportDto reviewReportDto = reviewService.isExistReport(memberId, Long.valueOf(bookId));

            if (Objects.nonNull(saleReportDto) && saleReportDto.getIsExist()
                    && (Objects.isNull(reviewReportDto) || Objects.isNull(reviewReportDto.getReviewId()))) {
                return "true";
            }
        }
        return "false";
    }

    /**
     * 리뷰 작성 권한을 확인하는 메소드 입니다.
     *
     * @param bookId 도서 아이디
     * @return
     */
    @GetMapping("/review/check/{bookId}")
    public String isPossiblePost(@PathVariable("bookId") String bookId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Long memberId = Long.valueOf(authentication.getName());
        //주문 기록이 있는지 확인
        if (Objects.nonNull(saleService.checkSaleByMemberIdAndBookId(memberId, bookId))) {
            return "sale";
        }
        //리뷰 작성 기록이 있는지 확인
        if (Objects.nonNull(reviewService.isExistReport(memberId, Long.valueOf(bookId)))) {
            return "review";
        }
        return "success";
    }
}
