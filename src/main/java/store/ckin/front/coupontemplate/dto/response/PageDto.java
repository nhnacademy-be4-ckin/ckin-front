package store.ckin.front.coupontemplate.dto.response;

import lombok.Getter;

import java.util.List;

/**
 * description:
 *
 * @author : gaeun
 * @version : 2024. 02. 18
 */

@Getter
public class PageDto<T> {
    private List<T> content;
    private int number;
    private int size;
    private long totalElements;
    private int totalPages;
}
