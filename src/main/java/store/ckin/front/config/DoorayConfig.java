package store.ckin.front.config;

import com.nhn.dooray.client.DoorayHookSender;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/**
 * Dooray Hook 에 관련된 설정을 하는 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 20.
 */
@Configuration
@ConfigurationProperties(prefix = "dooray")
@RequiredArgsConstructor
public class DoorayConfig {
    private final RestTemplate restTemplate;

    @Setter
    @Getter
    private String hookUrl;

    @Bean
    public DoorayHookSender doorayHookSender() {
        return new DoorayHookSender(restTemplate, getHookUrl());
    }
}
