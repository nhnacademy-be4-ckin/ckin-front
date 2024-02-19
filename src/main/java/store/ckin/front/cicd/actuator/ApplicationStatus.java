package store.ckin.front.cicd.actuator;

import java.util.concurrent.atomic.AtomicBoolean;
import org.springframework.stereotype.Component;

/**
 * Application 상태를 관리하는 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 19.
 */

@Component
public class ApplicationStatus {

    private final AtomicBoolean status = new AtomicBoolean(true);

    public void stopService() {
        this.status.set(false);
    }

    public boolean getStatus() {
        return this.status.get();
    }
}
