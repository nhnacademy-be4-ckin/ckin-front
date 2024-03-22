package store.ckin.front.cart.exception;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 21
 */
public class OrderFailedException extends RuntimeException {
    public OrderFailedException(String message) {
        super(message);
    }
}
