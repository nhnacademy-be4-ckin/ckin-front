package store.ckin.front.book.controller;

import java.util.HashMap;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.service.BookService;

/**
 * {class name}.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
@Controller
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;


    @PostMapping("/book/upload/description")
    public ResponseEntity<Map<String, String>> uploadDescriptionImage(@RequestPart("image") MultipartFile file) {
        String fileUrl = bookService.uploadDescriptionImage(file);

        Map<String, String> response = new HashMap<>();
        response.put("imageUrl", fileUrl);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/book/register")
    public String viewRegister() {
        return "admin/book/bookProductRegisterForm";
    }

}



