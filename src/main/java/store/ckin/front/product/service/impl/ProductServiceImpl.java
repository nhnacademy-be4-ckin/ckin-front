package store.ckin.front.product.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
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

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductAdapter productAdapter;
    private final ProductSearchRepository productSearchRepository;

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

    @Override
    public List<BookMainPageResponseDto> findRecentBooks(Integer limit) {
        return productAdapter.findRecentBooks(limit);
    }

    @Override
    public List<BookMainPageResponseDto> findRecentBooksByCategoryId(Long categoryId, Integer limit) {
        return productAdapter.findRecentBooksByCategoryId(categoryId, limit);
    }

    /**
     * {@inheritDoc}
     *
     * @param keyword     검색할 키워드
     * @param pageRequest 페이지 요청
     * @return
     */
    public List<SearchProduct> findResultByKeyword(String keyword, PageRequest pageRequest) {
        return productSearchRepository.findProductByKeyword(keyword, pageRequest);
    }

}
