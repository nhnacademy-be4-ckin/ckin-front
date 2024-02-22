package store.ckin.front.member.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import store.ckin.front.member.domain.LoginRequestDto;
import store.ckin.front.token.service.TokenService;

/**
 * 로그인 처리를 하는 Filter 클래스 입니다.
 *
 * @author : jinwoolee
 * @version : 2024. 02. 21.
 */
@RequiredArgsConstructor
public class CustomLoginFilter extends UsernamePasswordAuthenticationFilter {
    private final TokenService tokenService;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        ObjectMapper objectMapper = new ObjectMapper();
        LoginRequestDto loginRequestDto;

        try {
            loginRequestDto = objectMapper.readValue(request.getInputStream(), LoginRequestDto.class);
        } catch (IOException ex) {
            throw new BadCredentialsException("LoginRequestDTO parsing failed", ex);
        }

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(loginRequestDto.getEmail(), loginRequestDto.getPassword());

        return getAuthenticationManager().authenticate(token);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        UserDetails authorizedMemberDetails =  (UserDetails) authResult.getPrincipal();

        LoginRequestDto loginRequestDto =
                new LoginRequestDto(authorizedMemberDetails.getUsername(), authorizedMemberDetails.getPassword());

        ResponseEntity<String> responseEntity = tokenService.getToken(loginRequestDto);
        //TODO : Access Token, Refresh Token 을 만들어서 제공
        //TODO : Token 을 어떤 곳에 저장할 것인지?

        response.sendRedirect("/");
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        request.setAttribute("message", "로그인에 실패하였습니다.");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        request.getRequestDispatcher("/login").forward(request, response);
    }
}