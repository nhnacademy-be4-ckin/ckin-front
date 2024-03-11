package store.ckin.front.review.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.review.adapter.ReviewAdapter;
import store.ckin.front.review.dto.request.CreateReviewRequestDto;
import store.ckin.front.review.service.ReviewService;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewAdapter reviewAdapter;

    @Override
    public void postReview(CreateReviewRequestDto createReviewRequestDto, List<MultipartFile> imageList) {
        reviewAdapter.postReview(createReviewRequestDto, imageList);
    }
}
