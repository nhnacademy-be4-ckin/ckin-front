package store.ckin.front.coupontemplate.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

/**
 * 페이지네이션을 위한 페이지 정보 DTO
 *
 * @author : gaeun
 * @version : 2024. 02. 18
 */

@Getter
@AllArgsConstructor
public class PageDto<T> {
    private List<T> content;
    private int number;
    private int size;
    private long totalElements;
    private int totalPages;
}
