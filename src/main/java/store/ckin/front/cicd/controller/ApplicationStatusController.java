package store.ckin.front.cicd.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.cicd.actuator.ApplicationStatus;

/**
 * Application 상태를 관리하는 클래스입니다.
 *
 * @author 정승조
 * @version 2024. 02. 19.
 */

@RestController
@RequiredArgsConstructor
@RequestMapping("/actuator/status")
public class ApplicationStatusController {

    private ApplicationStatus applicationStatus;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void stopService() {
        applicationStatus.stopService();
    }
}
