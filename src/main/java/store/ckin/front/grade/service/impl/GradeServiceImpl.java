package store.ckin.front.grade.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.grade.adapter.GradeAdapter;
import store.ckin.front.grade.domain.request.GradeCreateRequestDto;
import store.ckin.front.grade.domain.request.GradeUpdateRequestDto;
import store.ckin.front.grade.domain.response.GradeResponseDto;
import store.ckin.front.grade.service.GradeService;

/**
 * GradeService 의 구현체입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 03. 21.
 */
@Service
@RequiredArgsConstructor
public class GradeServiceImpl implements GradeService {
    private final GradeAdapter gradeAdapter;

    @Override
    public void createGrade(GradeCreateRequestDto gradeCreateRequestDto) {
        gradeAdapter.createGrade(gradeCreateRequestDto);
    }

    @Override
    public List<GradeResponseDto> getGradeList() {
        return gradeAdapter.getGradeList();
    }

    @Override
    public void updateGrade(Long gradeId, GradeUpdateRequestDto gradeUpdateRequestDto) {
        gradeAdapter.updateGrade(gradeId, gradeUpdateRequestDto);
    }

    @Override
    public void deleteGrade(Long gradeId) {
        gradeAdapter.deleteGrade(gradeId);
    }
}

