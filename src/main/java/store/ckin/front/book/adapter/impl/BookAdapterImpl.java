package store.ckin.front.book.adapter.impl;

import static store.ckin.front.util.AdapterHeaderUtil.getHttpHeaders;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.FileSystemResource;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.util.UriComponentsBuilder;
import store.ckin.front.book.adapter.BookAdapter;
import store.ckin.front.book.dto.request.BookCreateRequestDto;
import store.ckin.front.book.dto.response.BookExtractionResponseDto;
import store.ckin.front.book.dto.response.BookListResponseDto;
import store.ckin.front.book.dto.response.BookResponseDto;
import store.ckin.front.config.properties.GatewayProperties;
import store.ckin.front.coupontemplate.dto.response.PageDto;

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
        body.add("requestDto", bookCreateRequestDto);
        HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);

        restTemplate.exchange(gatewayProperties.getGatewayUri() + BOOK_URL,
                HttpMethod.POST,
                requestEntity,
                new ParameterizedTypeReference<Void>() {
                });
    }
    @Override
    public PageDto<BookListResponseDto> findAllBooks(Pageable pageable) {
        HttpHeaders headers = getHttpHeaders(); // 필요한 헤더를 설정
        HttpEntity<Pageable> requestEntity = new HttpEntity<>(pageable, headers);

        // URI 구성
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + BOOK_URL)
                .queryParam("page", pageable.getPageNumber())
                .queryParam("size", pageable.getPageSize())
                .queryParam("sort", String.join(",", pageable.getSort().toString()));

        // RestTemplate를 사용하여 요청을 보내고 응답 받기
        ResponseEntity<PageDto<BookListResponseDto>> response = restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });

        return response.getBody(); // 결과 반환
    }


    /**
     * {@inheritDoc}
     */
    @Override
    public BookResponseDto findProductById(Long bookId) {
        HttpEntity<Void> requestEntity = new HttpEntity<>(getHttpHeaders());

        ResponseEntity<BookResponseDto> exchange =
                restTemplate.exchange(gatewayProperties.getGatewayUri() + "/api/books/" + bookId,
                        HttpMethod.GET,
                        requestEntity,
                        new ParameterizedTypeReference<>() {
                        });
        return exchange.getBody();
    }

    @Override
    public List<BookExtractionResponseDto> requestBookSaleList(List<Long> request) {

        HttpEntity<List<BookExtractionResponseDto>> requestEntity = new HttpEntity<>(getHttpHeaders());

        String requestUrl =
                UriComponentsBuilder.fromHttpUrl(gatewayProperties.getGatewayUri() + BOOK_URL + "/extraction")
                        .queryParam("bookId", request)
                        .encode()
                        .toUriString();

        ResponseEntity<List<BookExtractionResponseDto>> exchange = restTemplate.exchange(
                requestUrl,
                HttpMethod.GET,
                requestEntity,
                new ParameterizedTypeReference<>() {
                });


        return exchange.getBody();
    }

    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(Objects.requireNonNull(file.getOriginalFilename()));
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }

}
