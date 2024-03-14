package store.ckin.front.aop;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 회원 전용 메서드에 사용하는 어노테이션입니다.
 *
 * @author 정승조
 * @version 2024. 03. 14.
 */

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Member {
}
