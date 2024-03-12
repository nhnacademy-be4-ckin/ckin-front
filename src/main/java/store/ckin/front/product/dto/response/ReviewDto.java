package store.ckin.front.product.dto.response;

import java.sql.Date;
import lombok.AllArgsConstructor;
import lombok.Getter;

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
