package store.ckin.front.product.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;
import store.ckin.front.coupontemplate.dto.response.PageDto;
import store.ckin.front.product.adapter.ProductAdapter;
import store.ckin.front.product.dto.response.BookListResponseDto;
import store.ckin.front.product.service.ProductService;

import java.util.List;

/**
 * CouponPolicyServiceImpl
 *
 * @author 이가은
 * @version 2024. 03. 07.
 */

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductAdapter productAdapter;

    /**
     * {@inheritDoc}
     */
    @Override
    public PageDto<BookListResponseDto> findByCategoryId(Long categoryId, Pageable pageable) {
        return productAdapter.findByCategoryId(categoryId, pageable);
    }
}
