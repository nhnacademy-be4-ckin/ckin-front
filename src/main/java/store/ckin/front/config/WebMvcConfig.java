package store.ckin.front.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import store.ckin.front.cart.interceptor.CartIdInitInterceptor;

/**
 * description:
 *
 * @author : S20184366
 * @version : 2024. 02. 28
 */
@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {
    private final CartIdInitInterceptor cartIdInitInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(cartIdInitInterceptor)
                .addPathPatterns("/cart/**");
    }
}
