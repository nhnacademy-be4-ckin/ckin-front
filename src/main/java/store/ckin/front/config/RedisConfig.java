package store.ckin.front.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import store.ckin.front.config.properties.RedisProperties;
import store.ckin.front.skm.util.KeyManager;

/**
 * Redis DB의 설정 클래스.
 *
 * @author 김준현
 * @version 2024. 02. 22
 */
@Configuration
@RequiredArgsConstructor
public class RedisConfig {
    private final RedisProperties redisProperties;
    private final KeyManager keyManager;

    @Bean(name = "cartRedisFactory")
    public RedisConnectionFactory cartRedisConnectionFactory() {
        RedisStandaloneConfiguration redisStandaloneConfiguration
                = new RedisStandaloneConfiguration();
        redisStandaloneConfiguration.setHostName(keyManager.keyStore(redisProperties.getHostname()));
        redisStandaloneConfiguration.setPort(Integer.parseInt(keyManager.keyStore(redisProperties.getPort())));
        redisStandaloneConfiguration.setPassword(keyManager.keyStore(redisProperties.getPassword()));
        redisStandaloneConfiguration.setDatabase(redisProperties.getCartDatabaseIndex());

        return new LettuceConnectionFactory(redisStandaloneConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();

        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());
        redisTemplate.setConnectionFactory(cartRedisConnectionFactory());

        return redisTemplate;
    }

    /**
     * Auth 관련된 정보로 설정한 RedisConnectionFactory 입니다.
     *
     * @return the redis connection factory
     */
    @Bean(name = "authRedisFactory")
    public RedisConnectionFactory authRedisConnectionFactory() {
        RedisStandaloneConfiguration redisStandaloneConfiguration
                = new RedisStandaloneConfiguration();
        redisStandaloneConfiguration.setHostName(keyManager.keyStore(redisProperties.getHostname()));
        redisStandaloneConfiguration.setPort(Integer.parseInt(keyManager.keyStore(redisProperties.getPort())));
        redisStandaloneConfiguration.setPassword(keyManager.keyStore(redisProperties.getPassword()));
        redisStandaloneConfiguration.setDatabase(redisProperties.getAuthDatabaseIndex());

        return new LettuceConnectionFactory(redisStandaloneConfiguration);
    }

    /**
     * AuthRedisTemplate 을 Bean 으로 등록한 메서드 입니다.
     *
     * @return AuthRedisTemplate
     */
    @Bean(name = "authRedisTemplate")
    public RedisTemplate<String, Object> authRedisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();

        redisTemplate.setKeySerializer(new StringRedisSerializer());
        redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        redisTemplate.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());
        redisTemplate.setConnectionFactory(authRedisConnectionFactory());

        return redisTemplate;
    }
}
