package store.ckin.front.review.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 03. 08
 */
@Getter
@AllArgsConstructor
public class ReviewDto {
    private Long reviewId;
    private String author;
    private String message;
    private Integer reviewRate;
    private String reviewDate;
}
