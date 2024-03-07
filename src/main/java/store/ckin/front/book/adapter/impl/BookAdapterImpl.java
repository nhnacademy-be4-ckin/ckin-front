package store.ckin.front.book.adapter.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.config.properties.GatewayProperties;

/**
 * BookAdapter 구현 클래스.
 *
 * @author 나국로
 * @version 2024. 03. 04.
 */
@Component
@RequiredArgsConstructor
public class BookAdapterImpl implements BookAdapter {
    private static final String BOOK_URL = "/api/books";
    private final RestTemplate restTemplate;
    private final GatewayProperties gatewayProperties;
    private final ObjectMapper objectMapper;

    @Override
    public String requestUploadDescriptionImage(MultipartFile file) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA); // Multipart 요청을 위한 Content-Type 설정

        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
        body.add("file", file.getResource()); // MultipartFile의 리소스를 body에 추가

        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                gatewayProperties.getGatewayUri() + BOOK_URL + "/upload/description",
                HttpMethod.POST,
                requestEntity,
                String.class); // String 타입으로 응답을 받음
        return response.getBody();
    }


    @Override
    public void requestCreateBook(BookCreateRequestDto bookCreateRequestDto, MultipartFile file) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();

        if (file != null && !file.isEmpty()) {
            try {
                body.add("file", new FileSystemResource(convertMultiPartToFile(file)));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        body.add("requestDto", bookCreateRequestDto );
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        restTemplate.exchange(gatewayProperties.getGatewayUri() + BOOK_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<Void>() {});
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

}

