package store.ckin.front.book.controller;

import java.util.Collections;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.book.service.BookService;

/**
 * BookRestController.
 *
 * @author 나국로
 * @version 2024. 03. 07.
 */
@RestController
@RequiredArgsConstructor
public class BookRestController {
    private final BookService bookService;

    @PostMapping("/book/upload")
    public ResponseEntity<?> createBook(@ModelAttribute BookCreateRequestDto requestDto,
                                        @RequestPart("bookThumbnail") MultipartFile file) {

        bookService.createBook(requestDto, file);

        return ResponseEntity.ok().body(Collections.singletonMap("redirectUrl", "/admin/authorList"));
    }

    @GetMapping("/admin/books/{bookId}")
    public BookResponseDto getBookResponse(@PathVariable Long bookId) {
        return bookService.findProductById(bookId);
    }




}
