# 部署方法

## docker

docker-compose build

## 本地

MySQL 5.7

Maven 3.6.1

jdk 1.8

node 14

springboot 2.3.3

vue 2.7.16

IntelliJ IDEA 2022.1.4

# 运行方法

1. 将static文件解压缩，放到`melodylite\music-server\src\main\resources`和`melodylite\music-server\target\classes\static`目录
2. 创建数据库
将 `melodylite\docker\mysql\init` 文件夹中的 `music.sql` 文件导入数据库。
3. 修改用户名密码
修改 `music-website/music-server/src/main/resources/application.properties` 文件里的 `spring.datasource.username` 和 `spring.datasource.password`；
4. 运行后端
    
    进入music-server目录，命令行运行mvn spring-boot:run
    
5. 运行客户端
    
    进入music-client目录，命令行运行
    
    - npm install
    - npm run dev
6. 运行管理端
    
    进入music-manage目录，命令行运行
    
    - npm install
    - npm run dev