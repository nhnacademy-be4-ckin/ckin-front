package store.ckin.front.tag.adapter;

import java.util.List;
import store.ckin.front.tag.dto.request.TagCreateRequestDto;
import store.ckin.front.tag.dto.request.TagDeleteRequestDto;
import store.ckin.front.tag.dto.request.TagUpdateRequestDto;
import store.ckin.front.tag.dto.response.TagResponseDto;

/**
 * 태그 어댑터 인터페이스
 *
 * @author 김준현
 * @version 2024. 02. 15.
 */
public interface TagAdaptor {
    /**
     * 태그를 생성 메서드
     *
     * @param tagCreateRequestDto 태그 생성 요청 DTO
     */
    void insertTag(TagCreateRequestDto tagCreateRequestDto);

    /**
     * 전체 태그 목록 반환 메서드
     *
     * @return 현재까지 저장된 태그 목록
     */
    List<TagResponseDto> selectTagList();

    /**
     * 태그 업데이트 메서드
     * @param tagUpdateRequestDto 태그 수정 요청 DTO
     */
    void updateTag(TagUpdateRequestDto tagUpdateRequestDto);

    /**
     * 태그 삭제 메서드
     *
     * @param tagDeleteRequestDto 태그 삭제 요청 DTO
     */
    void deleteTag(TagDeleteRequestDto tagDeleteRequestDto);
}
