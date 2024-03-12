package store.ckin.front.author.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;
import store.ckin.front.author.service.AuthorService;

/**
 * AuthorRestController.
 *
 * @author 나국로
 * @version 2024. 03. 12.
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/authors")
public class AuthorRestController {

    private final AuthorService authorService;


    /**
     * 페이징 처리하여 모든 작가 목록을 반환합니다.
     *
     * @param pageable 페이지 정보
     * @return 작가 목록에 대한 페이지 응답
     */
    @GetMapping("/authorList")
    public PageResponse<AuthorResponseDto> findAllAuthors(@PageableDefault Pageable pageable) {
        return authorService.getAuthors(pageable);
    }

    /**
     * 이름으로 작가를 검색하여 페이징 처리된 결과를 반환합니다.
     *
     * @param name     검색할 이름
     * @param pageable 페이지 정보
     * @return 이름으로 검색된 작가 목록에 대한 페이지 응답
     */
    @GetMapping("/authorList/search")
    public PageResponse<AuthorResponseDto> getAuthorsByName(@RequestParam String name,
                                                            @PageableDefault Pageable pageable) {
        return authorService.getAuthorsByName(name, pageable);
    }
}
