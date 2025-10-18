FROM node:14-buster

# 安装 Python 2
RUN apt-get update && apt-get install -y \
    build-essential \
    python \
    make \
    g++ \
    git

# 创建 Python 2 软链接
RUN ln -sf /usr/bin/python2 /usr/bin/python

# 配置镜像源
RUN npm config set registry https://registry.npmmirror.com
ENV SASS_BINARY_SITE="https://npmmirror.com/mirrors/node-sass"

WORKDIR /app
COPY music-client/package*.json ./  
RUN npm install --unsafe-perm

COPY music-client/ .     
RUN npm run build            
CMD ["npm", "run", "dev"]