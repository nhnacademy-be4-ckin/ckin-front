package store.ckin.front.address.domain.request;

import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 주소 추가를 요청하는 DTO 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 18.
 */
@Getter
@AllArgsConstructor
public class AddressAddRequestDto {
    @NotBlank
    private String postCode;

    @NotBlank
    private String base;

    @NotBlank
    private String detail;

    @NotBlank
    private String alias;
}
