package store.ckin.front.author.adapter;

import org.springframework.data.domain.Pageable;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;

/**
 * 작가 정보를 처리하는 어댑터 인터페이스입니다.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
public interface AuthorAdaptor {

    /**
     * 페이징 처리된 모든 작가 정보를 요청합니다.
     *
     * @param pageable 페이징 정보
     * @return 작가 목록의 페이지 응답
     */
    PageResponse<AuthorResponseDto> requestGetAllAuthors(Pageable pageable);

    /**
     * 이름으로 작가를 검색하고 페이징 처리된 결과를 반환합니다.
     *
     * @param name     검색할 작가의 이름
     * @param pageable 페이징 정보
     * @return 작가 목록의 페이지 응답
     */
    PageResponse<AuthorResponseDto> requestGetAuthorsByName(String name, Pageable pageable);

    /**
     * ID를 사용하여 특정 작가의 정보를 요청합니다.
     *
     * @param id 작가의 ID
     * @return 작가 응답 데이터 전송 객체
     */
    AuthorResponseDto requestGetAuthorById(Long id);

    /**
     * 새로운 작가를 생성하고 결과를 반환합니다.
     *
     * @param authorCreateRequestDto 작가 생성 요청 데이터 전송 객체
     */
    void requestCreateAuthor(AuthorCreateRequestDto authorCreateRequestDto);

    /**
     * 작가 정보를 수정하고 결과를 반환합니다.
     *
     * @param id                     수정할 작가의 ID
     * @param authorModifyRequestDto 작가 수정 요청 데이터 전송 객체
     */
    void requestModifyAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto);

    /**
     * 특정 작가를 삭제합니다.
     *
     * @param id 삭제할 작가의 ID
     */
    void requestDeleteAuthor(Long id);


}
