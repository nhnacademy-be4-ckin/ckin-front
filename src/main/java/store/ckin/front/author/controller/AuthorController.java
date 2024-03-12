package store.ckin.front.author.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;
import store.ckin.front.author.service.AuthorService;

/**
 * AuthorController.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/authors")
public class AuthorController {

    private final AuthorService authorService;

    private static final String REDIRECT_ADMIN_INDEX = "redirect:/admin/authors";


    /**
     * 모든 작가 정보를 조회하여 반환합니다.
     *
     * @param pageable 페이지 정보
     * @param model    모델 객체
     * @return 작가 목록 페이지 경로
     */
    @GetMapping
    public String findAllAuthors(@PageableDefault Pageable pageable, Model model) {
        PageResponse<AuthorResponseDto> authors = authorService.getAuthors(pageable);

        int maxPageButtonNum = 10;
        int pageButtonNum = Math.min(authors.getTotalPages(), maxPageButtonNum);

        model.addAttribute("isSearch", false);
        model.addAttribute("authors", authors.getContent());
        model.addAttribute("totalPages", authors.getTotalPages());
        model.addAttribute("authorCreateRequestDto", new AuthorCreateRequestDto());
        model.addAttribute("currentPage", authors.getNumber());
        model.addAttribute("isPrevious", authors.isPrevious());
        model.addAttribute("isNext", authors.isNext());
        model.addAttribute("pageButtonNum", pageButtonNum);

        return "admin/author/index";
    }

    /**
     * 새로운 작가를 추가합니다.
     *
     * @param authorCreateRequestDto 작가 생성 요청 DTO
     * @return 작가 목록 페이지로의 리다이렉트 경로
     */
    @PostMapping
    public String addAuthor(@ModelAttribute AuthorCreateRequestDto authorCreateRequestDto) {
        authorService.createAuthor(authorCreateRequestDto);

        return REDIRECT_ADMIN_INDEX;
    }

    /**
     * 주어진 ID의 작가 정보를 수정합니다.
     *
     * @param authorId               작가 ID
     * @param authorModifyRequestDto 작가 수정 요청 DTO
     * @return 작가 목록 페이지로의 리다이렉트 경로
     */
    @PutMapping("/{authorId}")
    public String modifyAuthor(@PathVariable Long authorId,
                               @ModelAttribute AuthorModifyRequestDto authorModifyRequestDto) {
        authorService.updateAuthor(authorId, authorModifyRequestDto);

        return REDIRECT_ADMIN_INDEX;
    }

    /**
     * 이름으로 작가를 검색하고 결과를 반환합니다.
     *
     * @param name     검색할 이름
     * @param pageable 페이지 정보
     * @param model    모델 객체
     * @return 작가 목록 페이지 경로
     */
    @GetMapping("/search")
    public String getAuthorsByName(@RequestParam String name, @PageableDefault Pageable pageable, Model model) {
        PageResponse<AuthorResponseDto> authors = authorService.getAuthorsByName(name, pageable);

        // Determine the number of page buttons to display
        int maxPageButtonNum = 10;
        int pageButtonNum = Math.min(authors.getTotalPages(), maxPageButtonNum);

        model.addAttribute("isSearch", true);
        model.addAttribute("authors", authors.getContent());
        model.addAttribute("authorCreateRequestDto", new AuthorCreateRequestDto());
        model.addAttribute("totalPages", authors.getTotalPages());
        model.addAttribute("currentPage", authors.getNumber());
        model.addAttribute("isPrevious", authors.isPrevious());
        model.addAttribute("isNext", authors.isNext());
        model.addAttribute("pageButtonNum", pageButtonNum);
        model.addAttribute("searchName", name);
        return "/admin/author/index";
    }


    /**
     * 주어진 ID의 작가를 삭제합니다.
     *
     * @param authorId 삭제할 작가 ID
     * @return 작가 목록 페이지로의 리다이렉트 경로
     */
    @DeleteMapping("/{authorId}")
    public String deleteAuthor(@PathVariable Long authorId) {
        authorService.deleteAuthor(authorId);
        return REDIRECT_ADMIN_INDEX;
    }


}
