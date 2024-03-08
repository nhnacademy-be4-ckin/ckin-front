package store.ckin.front.author.adapter;

import org.springframework.data.domain.Pageable;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;

/**
 * AuthorAdaptor.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
public interface AuthorAdaptor {

    PageResponse<AuthorResponseDto> requestGetAllAuthors(Pageable pageable);

    PageResponse<AuthorResponseDto> requestGetAuthorsByName(String name, Pageable pageable);

    AuthorResponseDto requestGetAuthorById(Long id);

    AuthorResponseDto requestCreateAuthor(AuthorCreateRequestDto authorCreateRequestDto);

    AuthorResponseDto requestModifyAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto);

    void requestDeleteAuthor(Long id);


}
