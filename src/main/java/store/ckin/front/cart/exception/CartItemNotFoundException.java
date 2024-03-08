package store.ckin.front.cart.exception;

/**
 * 상품을 찾지 못했을 경우 발생하는 Exception
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
public class CartItemNotFoundException extends RuntimeException {
    public CartItemNotFoundException(String message) {
        super(message);
    }
}
