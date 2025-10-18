# 使用Maven 3.6.1 + JDK 8官方镜像
FROM maven:3.6.1-jdk-8 AS build

WORKDIR /app

# 只复制pom.xml文件，先下载依赖
COPY music-server/pom.xml .

# --disable-content-trust is not relevant here
# 强制不使用缓存重新下载依赖
# no cache
RUN mvn dependency:go-offline

# 复制整个src目录
COPY music-server/src ./src

# 添加这一行，强制不使用缓存重新编译打包
# no cache
RUN mvn clean package -DskipTests

# 运行阶段
FROM openjdk:8-jre

# 设置 locale 为 C.UTF-8，确保容器内部环境是 UTF-8
ENV LANG C.UTF-8

# 将构建阶段生成的jar包复制到运行阶段镜像中
COPY --from=build /app/target/*.jar /app/music-server.jar

# 复制静态资源
# 确保 music-server/src/main/resources/static 路径下确实有内容
COPY music-server/src/main/resources/static/ /app/static/

CMD ["java", "-Dfile.encoding=UTF-8", "-jar", "/app/music-server.jar"]