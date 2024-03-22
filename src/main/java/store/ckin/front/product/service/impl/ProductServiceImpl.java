package store.ckin.front.product.service.impl;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.adapter.ProductAdapter;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.dto.response.BookMainPageResponseDto;
import store.ckin.front.product.dto.response.BookResponseDto;
import store.ckin.front.product.service.ProductService;

/**
 * productService 구현체 클래스 입니다.
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */

@Service
public class ProductServiceImpl implements ProductService {

    private final RedisTemplate<String, Object> redisTemplate;

    private final ProductAdapter productAdapter;
    public static final Duration EXPIRE_CART_ITEMS = Duration.ofDays(2);
    public static final String RECENT_BOOK = "NEW";
    public static final String BEST_BOOK = "BEST";
    public static final String RECOMMEND_BOOK = "RECOMMEND";

    public ProductServiceImpl(@Qualifier("mainPageRedisTemplate") RedisTemplate<String, Object> redisTemplate,
                              ProductAdapter productAdapter) {
        this.redisTemplate = redisTemplate;
        this.productAdapter = productAdapter;
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
        initCartAndUpdateExpire(RECENT_BOOK);
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
        initCartAndUpdateExpire(BEST_BOOK);
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
        initCartAndUpdateExpire(RECOMMEND_BOOK);
        List<BookMainPageResponseDto> responseList = new ArrayList<>();
        Objects.requireNonNull(redisTemplate.opsForList().range(RECOMMEND_BOOK, 0, 7))
                .forEach(o -> responseList.add((BookMainPageResponseDto) o));
        return responseList;
    }

    /**
     * 레디스가 만료되었는지 확인하고 값이 비어있다면 데이터 베이스에서 필요한 값을 불러옵니다.
     *
     * @param key 레디스에 정보를 담고 있는 리스트의 키
     */
    private void initCartAndUpdateExpire(String key) {
        ListOperations<String, Object> opsForList = redisTemplate.opsForList();
        if (Objects.isNull(opsForList.range(key, 0, 7))) {
            switch (key) {
                case RECENT_BOOK:
                    getRecentBooks(key);
                    break;
                case BEST_BOOK:
                    getBestBooks(key);
                    break;
                case RECOMMEND_BOOK:
                    getRecommendBooks(key);
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
     * 인기 도서에 대한 정보를 레디스로 가져옵니다.
     *
     * @param key 인기 도서 키
     */
    private void getBestBooks(String key) {
        List<BookMainPageResponseDto> recentBooks = productAdapter.getBestBooks(8);
        recentBooks.forEach(bookMainPageResponseDto
                -> redisTemplate.opsForList().rightPush(key, bookMainPageResponseDto));
    }

    /**
     * 추천 도서에 대한 정보를 레디스로 가져옵니다.
     *
     * @param key 추천 도서 키
     */
    private void getRecommendBooks(String key) {
        List<BookMainPageResponseDto> recentBooks = productAdapter.getRecommendBooks(8);
        recentBooks.forEach(bookMainPageResponseDto
                -> redisTemplate.opsForList().rightPush(key, bookMainPageResponseDto));
    }

}
