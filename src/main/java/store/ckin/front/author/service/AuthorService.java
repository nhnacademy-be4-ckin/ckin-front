package store.ckin.front.author.service;

import org.springframework.data.domain.Pageable;
import store.ckin.front.author.PageResponse;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;

/**
 * {class name}.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
public interface AuthorService {
    PageResponse<AuthorResponseDto> getAuthors(Pageable pageable);

    PageResponse<AuthorResponseDto> getAuthorsByName(String name, Pageable pageable);

    AuthorResponseDto getAuthorById(Long id);

    AuthorResponseDto createAuthor(AuthorCreateRequestDto authorCreateRequestDto);

    AuthorResponseDto updateAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto);

    void deleteAuthor(Long id);

}
