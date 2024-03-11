package store.ckin.front.review.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 03. 09
 */
@Getter
@AllArgsConstructor
public class CreateReviewRequestDto {
    private Long memberId;
    private Long bookId;
    private Integer reviewRate;
    private String reviewComment;
}
