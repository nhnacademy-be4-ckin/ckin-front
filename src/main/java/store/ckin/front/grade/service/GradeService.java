package store.ckin.front.grade.service;

import java.util.List;
import store.ckin.front.grade.domain.request.GradeRequestDto;
import store.ckin.front.grade.domain.response.GradeResponseDto;

/**
 * Grade 관련 서비스에 대한 내부 로직을 처리하는 Service Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
public interface GradeService {
    void createGrade(GradeRequestDto gradeRequestDto);

    List<GradeResponseDto> getGradeList();

    void updateGrade(GradeRequestDto gradeRequestDto);

    void deleteGrade(Long gradeId);
}
