package store.ckin.front.config;

import javax.validation.constraints.NotBlank;
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
public class PortProperties {

    @NotBlank
    private String apiAddress;

    @NotBlank
    private String authAddress;

    @NotBlank
    private String couponAddress;

    @NotBlank
    private String gatewayAddress;
}
