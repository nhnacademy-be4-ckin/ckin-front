package store.ckin.front.tag.service.impl;

import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import store.ckin.front.tag.adapter.TagAdaptor;
import store.ckin.front.tag.dto.request.TagCreateRequestDto;
import store.ckin.front.tag.dto.request.TagDeleteRequestDto;
import store.ckin.front.tag.dto.request.TagUpdateRequestDto;
import store.ckin.front.tag.dto.response.TagResponseDto;
import store.ckin.front.tag.service.TagService;

/**
 * 태그 서비스 구현 클래스
 *
 * @author 김준현
 * @version 2024. 02. 15.
 */
@Service
@RequiredArgsConstructor
public class TagServiceImpl implements TagService {
    private final TagAdaptor tagAdaptor;

    /**
     * {@inheritDoc}
     * @param tagCreateRequestDto 태그 생성 요청 DTO
     */
    @Override
    public void createTag(TagCreateRequestDto tagCreateRequestDto) {
        tagAdaptor.insertTag(tagCreateRequestDto);
    }

    @Override
    public List<TagResponseDto> readTagList() {
        return tagAdaptor.selectTagList();
    }

    @Override
    public void updateTag(TagUpdateRequestDto tagUpdateRequestDto) {
        tagAdaptor.updateTag(tagUpdateRequestDto);
    }

    @Override
    public void deleteTag(TagDeleteRequestDto tagDeleteRequestDto) {
        tagAdaptor.deleteTag(tagDeleteRequestDto);
    }
}
