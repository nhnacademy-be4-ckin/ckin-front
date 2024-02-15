package store.ckin.front.tag.service;

import java.util.List;
import store.ckin.front.tag.dto.request.TagCreateRequestDto;
import store.ckin.front.tag.dto.request.TagDeleteRequestDto;
import store.ckin.front.tag.dto.request.TagUpdateRequestDto;
import store.ckin.front.tag.dto.response.TagResponseDto;

/**
 * 태그 서비스 인터페이스
 *
 * @author 김준현
 * @version 2024. 02. 15.
 */
public interface TagService {
    /**
     * 태그 생성 서비스 메서드
     *
     * @param tagCreateRequestDto 태그 생성 요청 DTO
     */
    void createTag(TagCreateRequestDto tagCreateRequestDto);

    /**
     * 태그 리스트 반환 메서드
     * @return 현재까지 저장된 태그 리스트
     */
    List<TagResponseDto> readTagList();

    /**
     * 태그 수정 메서드
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
