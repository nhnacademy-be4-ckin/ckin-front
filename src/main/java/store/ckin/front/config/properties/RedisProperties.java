package store.ckin.front.config.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * description:
 *
 * @author : S20184366
 * @version : 2024. 03. 03
 */

@Getter
@Setter
@ConfigurationProperties(prefix = "ckin.redis")
public class RedisProperties {
    private String hostname;
    private String port;
    private String password;
    private int databaseIndex;
}
