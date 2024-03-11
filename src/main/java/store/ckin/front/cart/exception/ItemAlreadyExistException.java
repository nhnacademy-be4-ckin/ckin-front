package store.ckin.front.cart.exception;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 11
 */
public class ItemAlreadyExistException extends RuntimeException {
    public ItemAlreadyExistException(Long id) {
        super(String.format("Item(id=%d)이 이미 존재합니다", id));
    }
}
