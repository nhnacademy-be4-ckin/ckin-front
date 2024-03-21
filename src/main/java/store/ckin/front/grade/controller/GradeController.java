package store.ckin.front.grade.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import store.ckin.front.grade.domain.request.GradeCreateRequestDto;
import store.ckin.front.grade.domain.request.GradeUpdateRequestDto;
import store.ckin.front.grade.domain.response.GradeResponseDto;
import store.ckin.front.grade.service.GradeService;

/**
 * 관리자 페이지에서 등급을 관리하는 URL 을 호출하는 Controller 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/policy/grade")
public class GradeController {
    private final GradeService gradeService;

    private static final String GRADE_REDIRECT_URL = "redirect:/admin/policy/grade";

    /**
     * 등급 정책 관리 메인 페이지 입니다.
     */
    @GetMapping
    public String getGradeMain(Model model) {
        List<GradeResponseDto> gradeList = gradeService.getGradeList();
        model.addAttribute("gradeList", gradeList);

        return "admin/policy/grade/index";
    }

    /**
     * 등급 생성을 요청하는 메서드 입니다.
     */
    @PostMapping("/add")
    public String createGrade(@Valid GradeCreateRequestDto gradeCreateRequestDto) {
        gradeService.createGrade(gradeCreateRequestDto);

        return GRADE_REDIRECT_URL;
    }

    /**
     * 등급 수정을 요청하는 메서드 입니다.
     */
    @PostMapping("/update")
    public String updateGrade(@Valid GradeCreateRequestDto gradeCreateRequestDto) {
        gradeService.updateGrade(gradeCreateRequestDto);

        return GRADE_REDIRECT_URL;
    }

    /**
     * 등급 삭제를 요청하는 메서드 입니다.
     */
    @DeleteMapping("/{gradeId}")
    public String deleteGrade(@PathVariable("gradeId") Long gradeId) {
        gradeService.deleteGrade(gradeId);

        return GRADE_REDIRECT_URL;
    }
}
