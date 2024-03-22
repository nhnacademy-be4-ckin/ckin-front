package store.ckin.front.util;

import org.springframework.ui.Model;

/**
 * description:
 *
 * @author : dduneon
 * @version : 2024. 03. 20
 */
public class AlertUtil {
    private AlertUtil() {
    }

    public static String showSuccessAlert(Model model, String message, String url) {
        model.addAttribute("ALERT_TYPE", "success");
        model.addAttribute("ALERT_MSG", message);
        model.addAttribute("ALERT_URL", url);
        return "alert";
    }

    public static String showErrorAlert(Model model, String message, String url) {
        model.addAttribute("ALERT_TYPE", "error");
        model.addAttribute("ALERT_MSG", message);
        model.addAttribute("ALERT_URL", url);
        return "alert";
    }
}
