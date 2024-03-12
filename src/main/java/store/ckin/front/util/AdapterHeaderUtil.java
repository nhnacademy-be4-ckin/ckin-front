package store.ckin.front.util;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Objects;

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

        HttpServletRequest request = ((ServletRequestAttributes)
                RequestContextHolder.currentRequestAttributes()).getRequest();

        if (Objects.nonNull(request.getAttribute(JwtUtil.HEADER_AUTHORIZATION))) {
            httpHeaders.setBearerAuth(
                    String.valueOf(request.getAttribute(JwtUtil.HEADER_AUTHORIZATION)));
        }

        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        httpHeaders.setAccept(List.of(MediaType.APPLICATION_JSON));

        return httpHeaders;
    }

    /**
     * MediaType 을 지정할 수 있는 헤더 생성 메서드입니다.
     */
    public static HttpHeaders getHttpHeaders(MediaType mediaType) {
        ServletRequestAttributes servletRequestAttributes =
                (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        HttpServletRequest request = servletRequestAttributes.getRequest();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(mediaType);
        headers.setAccept(List.of(mediaType));

        String accessToken = (String) request.getAttribute(JwtUtil.HEADER_AUTHORIZATION);
        if (Objects.nonNull(accessToken)) {
            headers.add(JwtUtil.HEADER_AUTHORIZATION, accessToken);
        }

        return headers;
    }


}
