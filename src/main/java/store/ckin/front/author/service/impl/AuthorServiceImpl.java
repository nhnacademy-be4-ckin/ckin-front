package store.ckin.front.author.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.author.adapter.AuthorAdaptor;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;
import store.ckin.front.author.service.AuthorService;

/**
 * {class name}.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
@Service
@RequiredArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private final AuthorAdaptor authorAdaptor;


    @Override
    public PageResponse<AuthorResponseDto> getAuthors(Pageable pageable) {
        return authorAdaptor.requestGetAllAuthors(pageable);
    }

    @Override
    public PageResponse<AuthorResponseDto> getAuthorsByName(String name, Pageable pageable) {
        return authorAdaptor.requestGetAuthorsByName(name, pageable);
    }

    @Override
    public AuthorResponseDto getAuthorById(Long id) {
        return authorAdaptor.requestGetAuthorById(id);
    }

    @Override
    public AuthorResponseDto createAuthor(AuthorCreateRequestDto authorCreateRequestDto) {
        return authorAdaptor.requestCreateAuthor(authorCreateRequestDto);
    }

    @Override
    public AuthorResponseDto updateAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto) {
        return authorAdaptor.requestModifyAuthor(id, authorModifyRequestDto);
    }

    @Override
    public void deleteAuthor(Long id) {
        authorAdaptor.requestDeleteAuthor(id);
    }
}
