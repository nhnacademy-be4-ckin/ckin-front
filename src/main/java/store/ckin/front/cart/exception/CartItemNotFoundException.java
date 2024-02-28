package store.ckin.front.cart.exception;

/**
 * description
 *
 * @author 김준현
 * @version 2024. 02. 28
 */
public class CartItemNotFoundException extends RuntimeException{
    public CartItemNotFoundException(String message) {
        super(message);
    }
}
