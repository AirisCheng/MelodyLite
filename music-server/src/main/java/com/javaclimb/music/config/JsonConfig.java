package com.javaclimb.music.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.MediaType;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class JsonConfig {

    @Bean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        // 添加 UTF-8 编码的 MediaType
        List<MediaType> supportedMediaTypes = new ArrayList<>();
        supportedMediaTypes.add(new MediaType(MediaType.APPLICATION_JSON, java.nio.charset.StandardCharsets.UTF_8));
        converter.setSupportedMediaTypes(supportedMediaTypes);
        return converter;
    }
}