package store.ckin.front.review.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.service.ReviewService;

import java.util.List;

/**
 * ReviewController
 *
 * @author : 이가은
 * @version : 2024. 03. 09
 */
@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;

    /**
     * 리뷰 업로드를 호출하는 메소드 입니다.
     *
     * @param bookId        도서 아이디
     * @param reviewRate    리뷰 점수
     * @param reviewComment 리뷰 코멘트
     * @param imageList     리뷰의 이미지 리스트를 담고 있는 MultipartFile 리스트 입니다.
     */
    @PostMapping("/{bookId}")
    public String postReview(@PathVariable("bookId") Long bookId,
                             @RequestParam("reviewRate") String reviewRate,
                             @RequestParam("reviewComment") String reviewComment,
                             @RequestPart("imageList") List<MultipartFile> imageList) {

        for (MultipartFile img : imageList) {
            log.info("img : {}", img.getResource());
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String memberId = authentication.getName();

        CreateReviewRequestDto createReviewRequestDto =
                new CreateReviewRequestDto(Long.parseLong(memberId), bookId, Integer.parseInt(reviewRate), reviewComment);
        reviewService.postReview(createReviewRequestDto, imageList);

        return "redirect:/product/view/" + bookId;
    }

}
