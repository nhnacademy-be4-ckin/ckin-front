package store.ckin.front.product.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Repository;
import store.ckin.front.common.domain.PageInfo;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.product.domain.SearchProduct;

/**
 * Elasticsearch 검색을 위한 레포지토리 클래스
 *
 * @author : 김준현
 * @version : 2024. 03. 19
 */
@Slf4j
@Repository
@RequiredArgsConstructor
public class ProductSearchRepository {
    private final ElasticsearchOperations operations;

    private QueryBuilder addCategoryQuery(String category) {
        return QueryBuilders.matchQuery("category", category);
    }

    private Map<String, Float> getAdditionalFilter(List<String> filters) {
        Map<String, Float> result = new HashMap<>();
        for (String filter : filters) {
            if (filter.equals("title")) {
                result.put("title.ngram", 5.0f);
                result.put("title.nori", 5.0f);
            } else if (filter.equals("description")) {
                result.put("description.ngram", 1.5f);
                result.put("description.nori", 1.5f);
            } else if (filter.equals("publisher")) {
                result.put("publisher", 2.0f);
            } else if (filter.equals("author")) {
                result.put("author", 2.0f);
            }
        }
        return result;
    }

    public PagedResponse<List<SearchProduct>> findProductByKeyword(String keyword, PageRequest pageRequest,
                                                                   List<String> filters, List<String> categories) {
        BoolQueryBuilder query = QueryBuilders.boolQuery()
                .must(QueryBuilders.multiMatchQuery(keyword)
                        .fields(getAdditionalFilter(filters))
                );

        for (String category : categories) {
            query.must(addCategoryQuery(category));
        }

        NativeSearchQuery nativeSearchQuery = new NativeSearchQueryBuilder()
                .withQuery(query)
                .build();

        String resultQuery = nativeSearchQuery.getQuery().toString();
        log.debug("query : {}", resultQuery);

        List<SearchProduct> result = operations.search(nativeSearchQuery, SearchProduct.class).get()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());

        int startIndex = Math.min(pageRequest.getPageNumber() * pageRequest.getPageSize(), result.size());
        int endIndex = Math.min((pageRequest.getPageNumber() + 1) * pageRequest.getPageSize(), result.size());
        List<SearchProduct> pagedResult = result.subList(startIndex, endIndex);

        int totalPages = result.size() / pageRequest.getPageSize() +
                (result.size() % pageRequest.getPageSize() != 0 ? 1 : 0);
        PageInfo pageInfo = PageInfo.of(pageRequest.getPageNumber(), pageRequest.getPageSize(),
                result.size(), totalPages);

        return new PagedResponse<>(pagedResult, pageInfo);
    }

}
