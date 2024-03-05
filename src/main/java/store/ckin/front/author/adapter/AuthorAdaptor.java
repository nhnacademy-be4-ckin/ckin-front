package store.ckin.front.author.adapter;

import java.util.List;
import org.springframework.data.domain.Pageable;
import store.ckin.front.author.PageResponse;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;

/**
 * AuthorAdaptor.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
public interface AuthorAdaptor {

    PageResponse<AuthorResponseDto> requestGetAllAuthors(Pageable pageable);

    List<AuthorResponseDto> requestGetAuthorsByName(String name);

    AuthorResponseDto requestGetAuthorById(Long id);

    AuthorResponseDto requestCreateAuthor(AuthorCreateRequestDto authorCreateRequestDto);

    AuthorResponseDto requestModifyAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto);

    void requestDeleteAuthor(Long id);


}
