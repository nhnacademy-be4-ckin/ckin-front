package store.ckin.front.author.controller;

import java.util.List;
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
import store.ckin.front.author.PageResponse;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
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


    @GetMapping
    public String findAllAuthors(@PageableDefault Pageable pageable, Model model) {
        PageResponse<AuthorResponseDto> authors = authorService.getAuthors(pageable);

        model.addAttribute("authors", authors.getContent());
        model.addAttribute("authorCreateRequestDto", new AuthorCreateRequestDto());
        model.addAttribute("totalPages", authors.getTotalPages());
        model.addAttribute("currentPage", authors.getNumber());

        model.addAttribute("isPrevious", authors.isPrevious());
        model.addAttribute("isNext", authors.isNext());
        model.addAttribute("pageButtonNum", 100);

        return "admin/author/authorIndex";
    }

    @PostMapping

    public String addAuthor(@ModelAttribute AuthorCreateRequestDto authorCreateRequestDto) {
        authorService.createAuthor(authorCreateRequestDto);

        return "redirect:/admin/authors";
    }

    @PutMapping("/{authorId}")
    public String modifyAuthor(@PathVariable Long authorId,
                               @ModelAttribute AuthorModifyRequestDto authorModifyRequestDto) {
        authorService.updateAuthor(authorId, authorModifyRequestDto);

        return "redirect:/admin/authors";
    }

//    @GetMapping("/search")
//    public String getAuthorsByName(@RequestParam String name, Model model) {
//        List<AuthorResponseDto> authors = authorService.getAuthorsByName(name);
//        model.addAttribute("authors", authors);
//        return "admin/author/searchAuthors";
//    }


//    @GetMapping("/{authorId}")
//    public String getAuthorById(@PathVariable Long authorId, Model model) {
//        AuthorResponseDto author = authorService.getAuthorById(authorId);
//        model.addAttribute("author", author);
//        return "admin/author/authorDetail";
//    }

    @DeleteMapping("/{authorId}")
    public String deleteAuthor(@PathVariable Long authorId) {
        authorService.deleteAuthor(authorId);
        return "redirect:/admin/authors";
    }


}
