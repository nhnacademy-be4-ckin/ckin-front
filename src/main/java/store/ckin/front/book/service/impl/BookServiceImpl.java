package store.ckin.front.book.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.service.BookService;

/**
 * {class name}.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
    private final BookAdapter bookAdapter;


    @Override
    public void createBook(BookCreateRequestDto requestDto, MultipartFile file) {
        bookAdapter.requestCreateBook(requestDto, file);
    }

    @Override
    public String uploadDescriptionImage(MultipartFile file) {
        // 이미지 파일을 BookAdapter를 통해 업로드하고, 업로드된 이미지의 URL을 반환
        return bookAdapter.requestUploadDescriptionImage(file);
    }

}
