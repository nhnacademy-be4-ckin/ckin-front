package store.ckin.front.book.controller;

import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.service.BookService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

/**
 * BookController 클래스 .
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/books")
public class BookController {
    private final BookService bookService;


    @PostMapping("/upload/description")
    public ResponseEntity<Map<String, String>> uploadDescriptionImage(@RequestPart("image") MultipartFile file) {
        String fileUrl = bookService.uploadDescriptionImage(file);

        Map<String, String> response = new HashMap<>();
        response.put("imageUrl", fileUrl);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/register")
    public String viewRegister() {
        return "admin/book/create";
    }

    @GetMapping
    public String viewIndex(@PageableDefault(page = 0, size = 10) Pageable pageable,
                            Model model) {
        PageDto<BookListResponseDto> bookPageDto = bookService.findAllBooks(pageable);
        model.addAttribute("bookList", bookPageDto.getContent());
        model.addAttribute("isPrevious", bookPageDto.getNumber() > 0);
        model.addAttribute("isNext", bookPageDto.getNumber() < bookPageDto.getTotalPages() - 1);
        model.addAttribute("totalPages", bookPageDto.getTotalPages() == 0 ? 1 : bookPageDto.getTotalPages());
        model.addAttribute("currentPage", bookPageDto.getNumber());
        return "admin/book/index";
    }

}



