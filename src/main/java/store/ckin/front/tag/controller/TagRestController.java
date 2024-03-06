package store.ckin.front.tag.controller;

import java.util.List;
import javax.validation.constraints.Positive;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import store.ckin.front.common.dto.PagedResponse;
import store.ckin.front.tag.dto.response.TagResponseDto;
import store.ckin.front.tag.service.TagService;

/**
 * TagRestController.
 *
 * @author 나국로
 * @version 2024. 03. 05.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/admin/tags")
public class TagRestController {
    private final TagService tagService;

    @GetMapping
    public List<TagResponseDto> getTags(
            @Positive @RequestParam(defaultValue = "1") int page,
            @Positive @RequestParam(required = false, defaultValue = "10")
            int size) {
        PagedResponse<List<TagResponseDto>> tagPagedResponse = tagService.readTagList(page - 1, size);
        return tagPagedResponse.getData();
    }
}
