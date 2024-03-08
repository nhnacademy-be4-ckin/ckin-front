package store.ckin.front.config.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 토스페이먼츠 관련 설정을 위한 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 03. 08.
 */

@Getter
@Setter
@ConfigurationProperties(prefix = "toss")
public class TossProperties {

    private String secretKey;

    private String clientKey;
}
