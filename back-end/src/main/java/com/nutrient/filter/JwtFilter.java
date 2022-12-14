package com.nutrient.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nutrient.model.ErrorResponse;
import com.nutrient.util.JwtUtil;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import java.util.Date;

//@Component
public class JwtFilter extends OncePerRequestFilter {

    private final ObjectMapper mapper;
    private final JwtUtil jwtUtil;

    public JwtFilter(ObjectMapper mapper, JwtUtil jwtUtil) {
        this.mapper = mapper;
        this.jwtUtil = jwtUtil;
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        return path.contains("/api/user/");
    }

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        httpServletResponse.setHeader("Access-Control-Allow-Origin","*"); 
        httpServletResponse.setHeader("Access-Control-Allow-Methods","POST,GET,OPTIONS,DELETE,PUT,OPTIONS");  
        httpServletResponse.setHeader("Access-Control-Expose-Headers","*");
        httpServletResponse.setHeader("Access-Control-Allow-Headers", "x-requested-with,Cache-Control,Pragma,Content-Type,Authorization,authorization"); 
        httpServletResponse.setHeader("Access-Control-Allow-Credentials","true");
        final String authorizationHeader = httpServletRequest.getHeader("Authorization");

        if (authorizationHeader == null) {
            ErrorResponse errorResponse = new ErrorResponse(
                    "No token has been found",
                    HttpStatus.UNAUTHORIZED.value(),
                    new Date(),
                    HttpStatus.UNAUTHORIZED.getReasonPhrase()
            );

            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            httpServletResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);

            mapper.writeValue(httpServletResponse.getWriter(), errorResponse);
            return;
        }

        boolean isValid;
        try {
            String token = authorizationHeader.substring(7);
            isValid = jwtUtil.validateToken(token);
        } catch (Exception e) {
            System.out.println(e);
            isValid = false;
        }

        if (!isValid) {
            ErrorResponse errorResponse = new ErrorResponse(
                    "Token is invalid",
                    HttpStatus.UNAUTHORIZED.value(),
                    new Date(),
                    HttpStatus.UNAUTHORIZED.getReasonPhrase()
            );

            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            httpServletResponse.setContentType(MediaType.APPLICATION_JSON_VALUE);

            mapper.writeValue(httpServletResponse.getWriter(), errorResponse);
            return;
        }



        if ("OPTIONS".equals(httpServletRequest.getMethod())) {
            httpServletResponse.setStatus(HttpServletResponse.SC_OK);
        } else{ filterChain.doFilter(httpServletRequest, httpServletResponse);}
       
    }
}