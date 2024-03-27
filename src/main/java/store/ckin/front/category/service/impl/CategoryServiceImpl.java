package store.ckin.front.category.service.impl;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import store.ckin.front.category.adapter.CategoryAdapter;
import store.ckin.front.category.dto.request.CategoryCreateRequestDto;
import store.ckin.front.category.dto.request.CategoryUpdateRequestDto;
import store.ckin.front.category.dto.response.CategoryCacheResponseDto;
import store.ckin.front.category.dto.response.CategoryNameResponseDto;
import store.ckin.front.category.dto.response.CategoryResponseDto;
import store.ckin.front.category.service.CategoryService;

/**
 * CategoryService 구현 클래스.
 *
 * @author 나국로, 이가은
 * @version 2024. 02. 22.
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    private final RedisTemplate<String, Object> redisTemplate;
    public static final Duration EXPIRE_CATEGORIES = Duration.ofDays(1);

    private final CategoryAdapter categoryAdapter;
    public static final String CATEGORIES = "categories";


    public CategoryServiceImpl(@Qualifier("categoryRedisTemplate") RedisTemplate<String, Object> redisTemplate,
                               CategoryAdapter categoryAdapter) {
        this.redisTemplate = redisTemplate;
        this.categoryAdapter = categoryAdapter;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void createCategory(CategoryCreateRequestDto categoryCreateRequestDto) {
        categoryAdapter.requestCreateCategory(categoryCreateRequestDto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<CategoryResponseDto> getTopCategories() {
        return categoryAdapter.requestGetTopCategories();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<CategoryResponseDto> getSubcategories(Long parentId) {
        return categoryAdapter.requestGetSubcategories(parentId);
    }

    @Override
    public CategoryNameResponseDto getCategoryById(Long categoryId) {
        return new CategoryNameResponseDto(categoryAdapter.getCategoryName(categoryId));
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void updateCategory(Long categoryId, CategoryUpdateRequestDto categoryUpdateDto) {
        categoryAdapter.requestUpdateCategory(categoryId, categoryUpdateDto);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void deleteCategory(Long categoryId) {
        categoryAdapter.requestDeleteCategory(categoryId);
    }

    @Override
    public List<CategoryResponseDto> getSubcategoriesFromRedis(Long parentId) {
        initCategoriesAndUpdateExpire(CATEGORIES);
        List<CategoryCacheResponseDto> categories = new ArrayList<>();
        Objects.requireNonNull(redisTemplate.opsForList().range(CATEGORIES, 0, -1))
                .forEach(o -> categories.add((CategoryCacheResponseDto) o));

        return categories.stream()
                .filter(category -> parentId.equals(category.getParentCategoryId()))
                .map(cacheDto -> CategoryResponseDto.builder()
                        .categoryId(cacheDto.getCategoryId())
                        .categoryName(cacheDto.getCategoryName())
                        .build())
                .collect(Collectors.toList());


    }

    private void initCategoriesAndUpdateExpire(String key) {
        ListOperations<String, Object> opsForList = redisTemplate.opsForList();
        Long size = opsForList.size(key);
        if (size == null || size == 0) {
            getCategories(key);
        }

        redisTemplate.expire(key, EXPIRE_CATEGORIES);
    }

    private void getCategories(String key) {
        List<CategoryCacheResponseDto> categories = categoryAdapter.getAllCategories();
        categories.forEach(categoryCacheResponseDto
                -> redisTemplate.opsForList().rightPush(key, categoryCacheResponseDto));

    }
}
