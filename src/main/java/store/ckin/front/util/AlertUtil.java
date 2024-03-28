package store.ckin.front.util;

import org.springframework.ui.Model;

/**
 * 컨트롤러에서 알럿을 띄우고 특정 페이지로 리다이렉트 하기 위한 유틸 클래스
 *
 * @author : dduneon
 * @version : 2024. 03. 20
 */
public class AlertUtil {
    private AlertUtil() {
    }

    /**
     * 성공 Alert 메시지를 띄움
     *
     * @param model   컨트롤러에서 주어지는 Model 객체
     * @param message 알럿에 띄우고 싶은 메시지
     * @param url     알럿 후 리다이렉트 할 페이지 주소
     * @return 알럿이 포함된 HTML 페이지
     */
    public static String showSuccessAlert(Model model, String message, String url) {
        model.addAttribute("ALERT_TYPE", "success");
        model.addAttribute("ALERT_MSG", message);
        model.addAttribute("ALERT_URL", url);
        return "alert";
    }

    /**
     * 실패 Alert 메시지를 띄움
     *
     * @param model   컨트롤러에서 주어지는 Model 객체
     * @param message 알럿에 띄우고 싶은 메시지
     * @param url     알럿 후 리다이렉트 할 페이지 주소
     * @return 알럿이 포함된 HTML 페이지
     */
    public static String showErrorAlert(Model model, String message, String url) {
        model.addAttribute("ALERT_TYPE", "error");
        model.addAttribute("ALERT_MSG", message);
        model.addAttribute("ALERT_URL", url);
        return "alert";
    }
}
