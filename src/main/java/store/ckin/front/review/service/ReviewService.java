package store.ckin.front.review.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
public interface ReviewService {
    void postReview(CreateReviewRequestDto createReviewRequestDto, List<MultipartFile> imageList);
}
