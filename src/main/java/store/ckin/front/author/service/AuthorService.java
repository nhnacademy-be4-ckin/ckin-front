package store.ckin.front.author.service;

import org.springframework.data.domain.Pageable;
import store.ckin.front.author.dto.request.AuthorCreateRequestDto;
import store.ckin.front.author.dto.request.AuthorModifyRequestDto;
import store.ckin.front.author.dto.response.AuthorResponseDto;
import store.ckin.front.author.dto.response.PageResponse;

/**
 * 작가 서비스 인터페이스입니다.
 *
 * @author 나국로
 * @version 2024. 02. 20.
 */
public interface AuthorService {
    /**
     * 페이징 처리하여 작가 목록을 가져옵니다.
     *
     * @param pageable 페이징 정보
     * @return 작가 목록에 대한 페이지 응답
     */
    PageResponse<AuthorResponseDto> getAuthors(Pageable pageable);

    /**
     * 이름을 기준으로 작가를 검색하고 페이징 처리하여 결과를 반환합니다.
     *
     * @param name     검색할 작가의 이름
     * @param pageable 페이징 정보
     * @return 이름으로 검색된 작가 목록에 대한 페이지 응답
     */

    PageResponse<AuthorResponseDto> getAuthorsByName(String name, Pageable pageable);

    /**
     * ID를 기준으로 특정 작가의 정보를 가져옵니다.
     *
     * @param id 가져올 작가의 ID
     * @return 요청된 ID에 해당하는 작가의 정보
     */
    AuthorResponseDto getAuthorById(Long id);

    /**
     * 새로운 작가를 생성합니다
     *
     * @param authorCreateRequestDto 작가 생성에 필요한 요청 데이터
     */

    void createAuthor(AuthorCreateRequestDto authorCreateRequestDto);


    /**
     * 작가의 정보를 수정합니다.
     *
     * @param id                     작가의 ID
     * @param authorModifyRequestDto 수정할 작가 정보가 담긴 요청 데이터
     */
    void updateAuthor(Long id, AuthorModifyRequestDto authorModifyRequestDto);

    /**
     * 지정된 ID의 작가를 삭제합니다.
     *
     * @param id 삭제할 작가의 ID
     */
    void deleteAuthor(Long id);

}
