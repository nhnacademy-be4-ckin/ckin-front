package store.ckin.front.product.repository;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.elasticsearch.core.ElasticsearchOperations;
import org.springframework.data.elasticsearch.core.SearchHit;
import org.springframework.data.elasticsearch.core.query.NativeSearchQuery;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.stereotype.Repository;
import store.ckin.front.product.domain.SearchProduct;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 19
 */
@Slf4j
@Repository
@RequiredArgsConstructor
public class ProductSearchRepository {
    private final ElasticsearchOperations operations;

    public List<SearchProduct> findProductByKeyword(String keyword, PageRequest pageRequest) {
        MultiMatchQueryBuilder query =
                QueryBuilders.multiMatchQuery(keyword).fields(Map.of(
                                "title.ngram", 3.0f,
                                "title.nori", 3.0f,
                                "description.ngram", 1.5f,
                                "description.nori", 1.5f,
                                "publisher", 2.0f,
                                "author", 2.0f
                        )
                );
        NativeSearchQuery nativeSearchQuery = new NativeSearchQueryBuilder()
                .withQuery(query)
                .withPageable(pageRequest)
                .build();

        String resultQuery = nativeSearchQuery.getQuery().toString();
        log.debug("query : {}", resultQuery);

        return operations.search(nativeSearchQuery, SearchProduct.class).get()
                .map(SearchHit::getContent)
                .collect(Collectors.toList());
    }
}
