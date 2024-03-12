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
 * AuthorService 구현 클래스.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
@Service
@RequiredArgsConstructor
public class AuthorServiceImpl implements AuthorService {

    private final AuthorAdaptor authorAdaptor;

    /**
     * {@inheritDoc}
     */
    @Override
    public PageResponse<AuthorResponseDto> getAuthors(Pageable pageable) {
        return authorAdaptor.requestGetAllAuthors(pageable);
    }
    /**
     * {@inheritDoc}
     */
    @Override
    public PageResponse<AuthorResponseDto> getAuthorsByName(String name, Pageable pageable) {
        return authorAdaptor.requestGetAuthorsByName(name, pageable);
    }
    /**
     * {@inheritDoc}
     */
    @Override
    public AuthorResponseDto getAuthorById(Long id) {
        return authorAdaptor.requestGetAuthorById(id);
    }
    /**
     * {@inheritDoc}
     */
    @Override
    public void createAuthor(AuthorCreateRequestDto authorCreateRequestDto) {
        authorAdaptor.requestCreateAuthor(authorCreateRequestDto);
    }
    /**
     * {@inheritDoc}
     */
    @Override
    public void updateAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto) {
        authorAdaptor.requestModifyAuthor(id, authorModifyRequestDto);
    }
    /**
     * {@inheritDoc}
     */
    @Override
    public void deleteAuthor(Long id) {
        authorAdaptor.requestDeleteAuthor(id);
    }
}
