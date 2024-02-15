package store.ckin.front.tag.controller;

import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import store.ckin.front.tag.dto.request.TagCreateRequestDto;
import store.ckin.front.tag.dto.request.TagUpdateRequestDto;
import store.ckin.front.tag.dto.response.TagResponseDto;
import store.ckin.front.tag.service.TagService;

/**
 * 관리자 페이지 내 태그 관리 페이지 호출 컨트롤러
 *
 * @author 김준현
 * @version 2024. 02. 15.
 */
@Controller
@RequestMapping("/admin/tag")
@RequiredArgsConstructor
public class TagController {
    private final TagService tagService;

    /**
     * 태그 관리 페이지 호출
     *
     * @param model 현재까지 저장된 태그 리스트 전달
     * @return 태그 관리 페이지
     */
    @GetMapping
    public String getTagMain(Model model) {
        List<TagResponseDto> tagList = tagService.readTagList();
        model.addAttribute("tagList", tagList);
        return "admin/tag/index";
    }

    /**
     * 태그 추가 로직 호출
     *
     * @param tagCreateRequestDto 태그 추가 DTO
     * @param bindingResult       Validation을 위한 parameter
     * @return 태그 관리 페이지
     */
    @PostMapping("/create")
    public String createTag(@Valid TagCreateRequestDto tagCreateRequestDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // todo do something
            return "redirect:/admin/tag";
        }
        tagService.createTag(tagCreateRequestDto);
        return "redirect:/admin/tag";
    }

    /**
     * 태그 수정 로직 호출
     *
     * @param tagUpdateRequestDto 태그 수정 DTO
     * @param bindingResult       Validation을 위한 parameter
     * @return
     */
    @PostMapping("/update")
    public String updateTag(@Valid TagUpdateRequestDto tagUpdateRequestDto, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // todo do something
            return "redirect:/admin/tag";
        }
        tagService.updateTag(tagUpdateRequestDto);
        return "redirect:/admin/tag";
    }


}
