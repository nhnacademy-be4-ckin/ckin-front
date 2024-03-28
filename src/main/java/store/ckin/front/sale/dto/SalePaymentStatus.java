package store.ckin.front.sale.dto;

import lombok.Getter;

/**
 * 주문의 결제 상태를 나타내는 Enum.
 *
 * @author 정승조
 * @version 2024. 03. 19.
 */

@Getter
public enum SalePaymentStatus {
    WAITING("결제 대기 중"),
    PAID("결제 완료"),
    CANCEL("결제 취소");

    private final String status;

    SalePaymentStatus(String status) {
        this.status = status;
    }
}