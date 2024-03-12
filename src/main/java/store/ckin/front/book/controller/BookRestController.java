package store.ckin.front.book.controller;

import java.util.Collections;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.request.BookModifyRequestDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.book.service.BookService;

/**
 * BookRestController.
 *
 * @author 나국로
 * @version 2024. 03. 07.
 */
@RestController
@RequestMapping("/admin/books")
@RequiredArgsConstructor
public class BookRestController {
    private final BookService bookService;
    private static final String REDIRECT_URL = "redirectUrl";
    private static final String BOOK_INDEX_URL = "/admin/books";

    @PostMapping("/admin/books/upload")
    public ResponseEntity<Map<String, String>> createBook(@ModelAttribute BookCreateRequestDto requestDto,
                                                          @RequestPart("bookThumbnail") MultipartFile file) {

        bookService.createBook(requestDto, file);

        return ResponseEntity.ok().body(Collections.singletonMap(REDIRECT_URL, BOOK_INDEX_URL));
    }

    @GetMapping("/{bookId}")
    public BookResponseDto getBookResponse(@PathVariable Long bookId) {
        return bookService.findProductById(bookId);
    }
    @PutMapping("/{bookId}")
    public ResponseEntity<Map<String, String>> updateBook(@PathVariable Long bookId, @RequestBody BookModifyRequestDto requestDto) {

        bookService.updateBook(requestDto, bookId);

        return ResponseEntity.ok().body(Collections.singletonMap(REDIRECT_URL, BOOK_INDEX_URL));
    }

    @PutMapping("/thumbnail/{bookId}")
    public ResponseEntity<Map<String, String>> updateBookThumbnail(@PathVariable Long bookId,@RequestPart MultipartFile thumbnail) {

        bookService.updateBookThumbnail(bookId, thumbnail);

        return ResponseEntity.ok().body(Collections.singletonMap(REDIRECT_URL, BOOK_INDEX_URL));
    }


}
