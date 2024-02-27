package store.ckin.front.util;

import java.util.UUID;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * description:
 *
 * @author : S20184366
 * @version : 2024. 02. 28
 */
@Service
@RequiredArgsConstructor
public class RedisUtils {
    private final RedisTemplate<String, Object> redisTemplate;

    public void setData(String key, String value, Long expiredTime) {
//        redisTemplate.opsForHash().put(key, value);
//        UUID.randomUUID()
    }
}
