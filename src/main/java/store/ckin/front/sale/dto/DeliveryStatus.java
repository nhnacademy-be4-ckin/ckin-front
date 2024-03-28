package store.ckin.front.sale.dto;

import lombok.Getter;

/**
 * 주문의 배송 상태를 나타내는 Enum.
 *
 * @author 정승조
 * @version 2024. 03. 19.
 */
@Getter
public enum DeliveryStatus {
    READY("배송 준비 중"),
    IN_PROGRESS("배송 중"),
    DONE("배송 완료");

    private final String status;

    DeliveryStatus(String status) {
        this.status = status;
    }
}
