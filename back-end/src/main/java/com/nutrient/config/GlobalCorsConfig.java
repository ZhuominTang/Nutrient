package com.nutrient.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class GlobalCorsConfig {
    
    @Bean
    public WebMvcConfigurer corsConfigurer(){

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                //  Set the domain name that allows cross domain requests 
                //.allowedOrigins("*")  
                // Cross domain configuration error , take .allowedOrigins Replace with .allowedOriginPatterns that will do .
                .allowedOriginPatterns("*")
                //  Whether to allow certificates （cookies）
                .allowCredentials(true)
                //  Set allowed methods 
                .allowedMethods("*")
                .allowedHeaders("*")
                //  Cross domain allow time 
                .maxAge(3600);
            }
        };
    }
}
