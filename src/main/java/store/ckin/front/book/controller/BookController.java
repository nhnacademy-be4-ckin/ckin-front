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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
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


    /**
     * 도서 설명 이미지를 업로드하고 URL을 반환합니다.
     *
     * @param file 업로드할 이미지 파일
     * @return 업로드된 이미지의 URL이 포함된 ResponseEntity 객체
     */
    @PostMapping("/upload/description")
    public ResponseEntity<Map<String, String>> uploadDescriptionImage(@RequestPart("image") MultipartFile file) {
        String fileUrl = bookService.uploadDescriptionImage(file);

        Map<String, String> response = new HashMap<>();
        response.put("imageUrl", fileUrl);

        return ResponseEntity.ok(response);
    }

    /**
     * 도서 등록 페이지 뷰를 반환합니다.
     *
     * @return 도서 등록 페이지 경로
     */
    @GetMapping("/register")
    public String viewRegister() {
        return "admin/book/create";
    }

    /**
     * 도서 목록 페이지 뷰를 반환합니다.
     *
     * @param pageable 페이지 정보
     * @param model 모델 객체
     * @return 도서 목록 페이지 경로
     */
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

    /**
     * 도서 수정 페이지 뷰를 반환합니다.
     *
     * @param model 모델 객체
     * @param bookId 수정할 도서의 ID
     * @return 도서 수정 페이지 경로
     */
    @GetMapping("/update/{bookId}")
    public String viewBookUpdate(Model model, @PathVariable Long bookId) {
        BookResponseDto storedBook = bookService.findProductById(bookId);

        model.addAttribute("storedBook", storedBook);

        return "admin/book/update";
    }

}



