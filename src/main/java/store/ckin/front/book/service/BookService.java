package store.ckin.front.book.service;

import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;

/**
 * BookService 인터페이스.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
public interface BookService {
    void createBook(BookCreateRequestDto requestDto, MultipartFile file);

    String uploadDescriptionImage(MultipartFile file);
}
