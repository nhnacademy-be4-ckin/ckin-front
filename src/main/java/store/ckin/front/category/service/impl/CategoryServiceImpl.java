package store.ckin.front.category.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;
import store.ckin.front.coupon.adapter.CouponAdapter;
import store.ckin.front.coupon.dto.response.GetCouponResponseDto;
import store.ckin.front.coupon.service.CouponService;
import store.ckin.front.coupontemplate.dto.response.PageDto;

import java.util.List;

/**
 * CouponPolicyServiceImpl
 *
 * @author 이가은
 * @version 2024. 02. 20.
 */

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryAdapter categoryAdapter;

    /**
     * {@inheritDoc}
     */
    @Override
    public List<CategoryResponseDto> getSubcategories(Long parentId) {
        return categoryAdapter.getSubcategories(parentId);
    }
}
