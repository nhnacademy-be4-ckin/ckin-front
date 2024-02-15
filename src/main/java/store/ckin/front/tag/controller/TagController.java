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

    @PostMapping
    public String createTag(@Valid TagCreateRequestDto tagCreateRequestDto, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            throw new RuntimeException();
            // todo exception 정하기
        }
        return "redirect:/admin/tag";
    }
}
