package store.ckin.front.book.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.request.BookModifyRequestDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.book.service.BookService;

import java.util.Collections;
import java.util.Map;

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

    /**
     * 새로운 도서를 생성하고 생성 후 리다이렉트 URL을 반환합니다.
     *
     * @param requestDto 도서 생성 요청 DTO
     * @param file       도서 썸네일 이미지 파일
     * @return 도서 생성 후 리다이렉트할 URL이 담긴 ResponseEntity 객체
     */
    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> createBook(@ModelAttribute BookCreateRequestDto requestDto,
                                                          @RequestPart("bookThumbnail") MultipartFile file) {

        bookService.createBook(requestDto, file);

        return ResponseEntity.ok().body(Collections.singletonMap(REDIRECT_URL, BOOK_INDEX_URL));
    }

    /**
     * 주어진 ID의 도서 정보를 반환합니다.
     *
     * @param bookId 도서 ID
     * @return 도서 정보 DTO
     */
    @GetMapping("/{bookId}")
    public BookResponseDto getBookResponse(@PathVariable Long bookId) {
        return bookService.findProductById(bookId);
    }

    /**
     * 주어진 ID의 도서 정보를 수정하고 리다이렉트 URL을 반환합니다.
     *
     * @param bookId     도서 ID
     * @param requestDto 도서 수정 요청 DTO
     * @return 도서 수정 후 리다이렉트할 URL이 담긴 ResponseEntity 객체
     */
    @PutMapping("/{bookId}")
    public ResponseEntity<Map<String, String>> updateBook(@PathVariable Long bookId,
                                                          @RequestBody BookModifyRequestDto requestDto) {

        bookService.updateBook(requestDto, bookId);

        return ResponseEntity.ok().body(Collections.singletonMap(REDIRECT_URL, BOOK_INDEX_URL));
    }

    /**
     * 주어진 ID의 도서 썸네일 이미지를 업데이트하고 리다이렉트 URL을 반환합니다.
     *
     * @param bookId    도서 ID
     * @param thumbnail 새 썸네일 이미지 파일
     * @return 도서 썸네일 업데이트 후 리다이렉트할 URL이 담긴 ResponseEntity 객체
     */
    @PutMapping("/thumbnail/{bookId}")
    public ResponseEntity<Map<String, String>> updateBookThumbnail(@PathVariable Long bookId,
                                                                   @RequestPart MultipartFile thumbnail) {

        bookService.updateBookThumbnail(bookId, thumbnail);

        return ResponseEntity.ok().body(Collections.singletonMap(REDIRECT_URL, BOOK_INDEX_URL));
    }


}
