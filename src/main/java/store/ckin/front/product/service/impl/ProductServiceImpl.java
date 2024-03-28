package store.ckin.front.product.service.impl;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.adapter.ProductAdapter;
import store.ckin.front.product.domain.SearchProduct;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookMainPageResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;
import store.ckin.front.product.repository.ProductSearchRepository;
import store.ckin.front.product.service.ProductService;

/**
 * productService 구현체 클래스 입니다.
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */

@Slf4j
@Service
public class ProductServiceImpl implements ProductService {

    private final RedisTemplate<String, Object> redisTemplate;

    private final ProductAdapter productAdapter;
    private final ProductSearchRepository productSearchRepository;
    public static final Duration EXPIRE_CART_ITEMS = Duration.ofDays(2);
    public static final String RECENT_BOOK = "NEW";
    public static final String BEST_BOOK = "BEST";
    public static final String RECOMMEND_BOOK = "RECOMMEND";

    public ProductServiceImpl(@Qualifier("mainPageRedisTemplate") RedisTemplate<String, Object> redisTemplate,
                              ProductAdapter productAdapter, ProductSearchRepository productSearchRepository) {
        this.redisTemplate = redisTemplate;
        this.productAdapter = productAdapter;
        this.productSearchRepository = productSearchRepository;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable) {
        return productAdapter.findByCategoryId(categoryId, pageable);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public BookResponseDto findProductById(Long bookId) {
        return productAdapter.findProductById(bookId);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<BookMainPageResponseDto> getRecentPublishBooks() {
        initBookAndUpdateExpire(RECENT_BOOK);
        List<BookMainPageResponseDto> responseList = new ArrayList<>();
        Objects.requireNonNull(redisTemplate.opsForList().range(RECENT_BOOK, 0, 7))
                .forEach(o -> responseList.add((BookMainPageResponseDto) o));
        return responseList;
    }

    @Override
    public PageDto<BookResponseDto> getRecentPublishBooks(Pageable pageable) {
        return productAdapter.getRecentPublishedBook(pageable);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<BookMainPageResponseDto> getBestBooks() {
        initBookAndUpdateExpire(BEST_BOOK);
        List<BookMainPageResponseDto> responseList = new ArrayList<>();
        Objects.requireNonNull(redisTemplate.opsForList().range(BEST_BOOK, 0, 7))
                .forEach(o -> responseList.add((BookMainPageResponseDto) o));
        return responseList;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<BookMainPageResponseDto> getRecommendBooks() {
        initBookAndUpdateExpire(RECOMMEND_BOOK);
        List<BookMainPageResponseDto> responseList = new ArrayList<>();
        Objects.requireNonNull(redisTemplate.opsForList().range(RECOMMEND_BOOK, 0, 7))
                .forEach(o -> responseList.add((BookMainPageResponseDto) o));
        return responseList;
    }

    /**
     * 태그별로 보여줄 도서 목록을 가져오는 메소드 입니다.
     *
     * @param pageable 페이지 정보
     * @param tagName  태그 이름
     * @return 도서 페이지 DTO 반환
     */
    @Override
    public PageDto<BookResponseDto> getBookPageByTagName(Pageable pageable, String tagName) {
        return productAdapter.getBookPageByTagName(pageable, tagName);
    }

    /**
     * 레디스가 만료되었는지 확인하고 값이 비어있다면 데이터 베이스에서 필요한 값을 불러옵니다.
     *
     * @param key 레디스에 정보를 담고 있는 리스트의 키
     */
    private void initBookAndUpdateExpire(String key) {
        ListOperations<String, Object> opsForList = redisTemplate.opsForList();
        if (Objects.isNull(opsForList.range(key, 0, 7))
                || (opsForList.range(key, 0, 7)).isEmpty()) {
            switch (key) {
                case RECENT_BOOK:
                    getRecentBooks(key);
                    break;
                case BEST_BOOK:
                case RECOMMEND_BOOK:
                    getBookListByTagName(key);
                    break;
            }
        }
        redisTemplate.expire(key, EXPIRE_CART_ITEMS);
    }

    /**
     * 신간 도서에 대한 정보를 레디스로 가져옵니다.
     *
     * @param key 신간 도서 키
     */
    private void getRecentBooks(String key) {
        List<BookMainPageResponseDto> recentBooks = productAdapter.findRecentBooks(8);
        recentBooks.forEach(bookMainPageResponseDto -> System.out.println(bookMainPageResponseDto.toString()));
        recentBooks.forEach(bookMainPageResponseDto
                -> redisTemplate.opsForList().rightPush(key, bookMainPageResponseDto));
    }

    /**
     * 해당 태그를 가진 도서 목록에 대한 정보를 레디스로 가져옵니다.
     *
     * @param key 태그 이름
     */
    private void getBookListByTagName(String key) {
        List<BookMainPageResponseDto> recentBooks = productAdapter.getBooksByTagName(8, key);
        recentBooks.forEach(bookMainPageResponseDto
                -> redisTemplate.opsForList().rightPush(key, bookMainPageResponseDto));
    }

    /**
     * {@inheritDoc}
     *
     * @param keyword     검색할 키워드
     * @param pageRequest 페이지 요청
     * @return
     * @author 김준현
     */
    public PagedResponse<List<SearchProduct>> findResultByKeyword(String keyword, PageRequest pageRequest,
                                                                  String filter, String selectedCategory) {
        List<String> filterList = Arrays.stream(filter.split(",")).collect(Collectors.toList());
        List<String> categoryList = selectedCategory.isBlank() ? Collections.emptyList() :
                Arrays.stream(selectedCategory.split(",")).collect(Collectors.toList());
        return productSearchRepository.findProductByKeyword(keyword, pageRequest, filterList, categoryList);
    }

}
