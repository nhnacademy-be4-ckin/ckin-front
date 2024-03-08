package store.ckin.front.product.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.sql.Date;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 03. 08
 */
@Getter
@AllArgsConstructor
public class ReviewDto {
    private String author;
    private String message;
    private Date reviewDate;
}
