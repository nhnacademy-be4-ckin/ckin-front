package store.ckin.front.address.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * description
 *
 * @author : jinwoolee
 * @version : 2024. 03. 19.
 */
@Getter
@AllArgsConstructor
public class AddressAttributeDto {
    private String postCode;

    private String base;

    private String detail;
}
