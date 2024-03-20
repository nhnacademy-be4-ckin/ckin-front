package store.ckin.front.grade.adapter;

import java.util.List;
import store.ckin.front.grade.domain.request.GradeCreateRequestDto;
import store.ckin.front.grade.domain.request.GradeUpdateRequestDto;
import store.ckin.front.grade.domain.response.GradeResponseDto;

/**
 * 외부와 통신하여 Grade 정보를 조회하는 Adapter Interface 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
public interface GradeAdapter {
    void createGrade(GradeCreateRequestDto gradeCreateRequestDto);

    List<GradeResponseDto> getGradeList();

    void updateGrade(GradeUpdateRequestDto gradeUpdateRequestDto);

    void deleteGrade(Long gradeId);
}
