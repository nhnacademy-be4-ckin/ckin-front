package store.ckin.front.review.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.Text;
import store.ckin.front.member.domain.request.MemberInfoDetailRequestDto;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.service.ReviewService;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
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
    private final ObjectMapper objectMapper;

    @PostMapping("/{bookId}")
    public String postReview(@PathVariable("bookId") Long bookId,
                             @RequestParam("reviewRate") String reviewRate,
                             @RequestParam("reviewComment") String reviewComment,
                             @RequestPart("imageList") List<MultipartFile> imageList,
                             Model model) throws IOException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String memberId = authentication.getName();

        CreateReviewRequestDto createReviewRequestDto =
                new CreateReviewRequestDto(Long.parseLong(memberId), bookId, Integer.parseInt(reviewRate), reviewComment);
        reviewService.postReview(createReviewRequestDto, imageList);

        return "redirect:/product/view/" + bookId;
    }
//    review를 모든 사람이 남길 수 있음.
//    1) 모든 사람? -> 구매자인지 확인하는 컬럼
//    2) 구매자만? -> 구매자인지 확인하고 리뷰 달도록,
//    회원인지 조회 -> 회원만 접근할 수 있습니다.
//    회원 아이디와 도서 아이디 넘겨서 주문 기록이 있는지
//    주문 기록이 있으면 진행
//
//
}
