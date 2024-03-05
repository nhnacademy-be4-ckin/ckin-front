package store.ckin.front.author.service;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

    List<AuthorResponseDto> getAuthorsByName(String name);

    AuthorResponseDto getAuthorById(Long id);

    AuthorResponseDto createAuthor(AuthorCreateRequestDto authorCreateRequestDto);

    AuthorResponseDto updateAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto);

    void deleteAuthor(Long id);

}
