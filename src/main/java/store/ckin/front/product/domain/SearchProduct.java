package store.ckin.front.product.domain;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 19
 */
@ToString
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Document(indexName = "books", createIndex = false)
public class SearchProduct {
    @Id
    @Field("book_id")
    private Long id;
    private String title;
    private String description;
    private String category;
    private String publisher;
    private String author;
    private String thumbnail;
    @Field("sale_price")
    private Integer salePrice;
    @Field("regular_price")
    private Integer regularPrice;
    @Field("discount_rate")
    private Integer discountRate;
}
