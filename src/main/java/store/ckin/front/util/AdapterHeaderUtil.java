package store.ckin.front.util;

import java.util.List;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

/**
 * Adapter 에서 사용할 헤더를 만드는 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 15.
 */
public class AdapterHeaderUtil {

    private AdapterHeaderUtil() {
    }

    /**
     * 헤더 생성 메서드입니다.
     *
     * @return Http 헤더
     */
    public static HttpHeaders getHttpHeaders() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));
        return httpHeaders;
    }

}
