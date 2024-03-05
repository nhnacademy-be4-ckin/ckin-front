package store.ckin.front.book.adapter;

import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.dto.request.BookCreateRequestDto;

/**
 * {class name}.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
public interface BookAdapter {
    String requestUploadDescriptionImage(MultipartFile file);

    void requestCreateBook(BookCreateRequestDto bookCreateRequestDto, MultipartFile file);
}
