//package com.javaclimb.music.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
///**
// * 定位各种文件或头像地址
// */
//@Configuration
//public class FileConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry){
//        //歌手头像地址
//        registry.addResourceHandler("/img/singerPic/**").addResourceLocations(
//                "file:"+System.getProperty("user.dir")+System.getProperty("file.separator")+"img"
//                +System.getProperty("file.separator")+"singerPic"+System.getProperty("file.separator")
//        );
//        //歌单图片地址
//        registry.addResourceHandler("/img/songListPic/**").addResourceLocations(
//                "file:"+System.getProperty("user.dir")+System.getProperty("file.separator")+"img"
//                        +System.getProperty("file.separator")+"songListPic"+System.getProperty("file.separator")
//        );
//        //歌曲图片地址
//        registry.addResourceHandler("/img/songPic/**").addResourceLocations(
//                "file:"+System.getProperty("user.dir")+System.getProperty("file.separator")+"img"
//                        +System.getProperty("file.separator")+"songPic"+System.getProperty("file.separator")
//        );
//        //歌曲地址
//        registry.addResourceHandler("/song/**").addResourceLocations(
//                "file:"+System.getProperty("user.dir")+System.getProperty("file.separator")+"song"+System.getProperty("file.separator")
//        );
//        //前端用户头像地址
//        registry.addResourceHandler("/avatorImages/**").addResourceLocations(
//                "file:"+System.getProperty("user.dir")+System.getProperty("file.separator")+"avatorImages"+System.getProperty("file.separator")
//        );
//        //用户头像默认地址
//        registry.addResourceHandler("/img/**").addResourceLocations(
//                "file:"+System.getProperty("user.dir")+System.getProperty("file.separator")+"img"+System.getProperty("file.separator")
//        );
//    }
//}

//package com.javaclimb.music.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer; // 保留 import，但不再实现接口
//
///**
// * 定位各种文件或头像地址
// */
//@Configuration
//// 不再实现 WebMvcConfigurer 接口
//public class FileConfig { // <-- 类的开始花括号
//
//    // 保留方法签名，但不再使用 @Override 注解
//    public void addResourceHandlers(ResourceHandlerRegistry registry){
//        // 将静态资源路径映射到容器内的 /app 目录下的对应子目录
//        // 注意这里的路径是容器内的绝对路径
//        registry.addResourceHandler("/img/singerPic/**").addResourceLocations("file:/app/static/img/singerPic/");
//        registry.addResourceHandler("/img/songListPic/**").addResourceLocations("file:/app/static/img/songListPic/");
//        registry.addResourceHandler("/img/songPic/**").addResourceLocations("file:/app/static/img/songPic/");
//        registry.addResourceHandler("/song/**").addResourceLocations("file:/app/static/song/");
//        registry.addResourceHandler("/avatorImages/**").addResourceLocations("file:/app/static/avatorImages/");
//        // 如果有默认图片或其他直接在 /app/img 下的资源
//        // registry.addResourceHandler("/img/**").addResourceLocations("file:/app/img/");
//    } // <-- 方法的结束花括号
//
//}


package com.javaclimb.music.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;

@Configuration
public class FileConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry){
        // 这部分是classpath下 static 目录，SpringBoot 默认就是映射 classpath:/static/**，
        // 但自定义了ResourceHandler后要重新指定

        registry.addResourceHandler("/img/singerPic/**").addResourceLocations("classpath:/static/img/singerPic/");
        registry.addResourceHandler("/img/songListPic/**").addResourceLocations("classpath:/static/img/songListPic/");
        registry.addResourceHandler("/img/songPic/**").addResourceLocations("classpath:/static/img/songPic/");
        registry.addResourceHandler("/song/**").addResourceLocations("classpath:/static/song/");

        // 加载新上传的头像：项目根目录 /avatorImages/
        String externalPath = System.getProperty("user.dir") + File.separator + "avatorImages" + File.separator;

        registry.addResourceHandler("/avatorImages/**")
                .addResourceLocations(
                        "file:" + externalPath, // 新上传头像
                        "classpath:/static/avatorImages/" // 老头像
                );
    }
}