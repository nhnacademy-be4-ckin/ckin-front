package store.ckin.front.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * 포트 번호를 관리하기 위한 프로퍼티 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 13.
 */

@Getter
@Setter
@ConfigurationProperties(prefix = "port")
public class GatewayProperties {

    private String gatewayUri;
}
