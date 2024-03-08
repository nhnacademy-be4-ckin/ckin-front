package store.ckin.front.author.dto.response;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * PageResponse.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
@Getter
@NoArgsConstructor
public class PageResponse<T> {

    private List<T> content;

    private int totalPages;

    private int number;

    private boolean previous;

    private boolean next;
}