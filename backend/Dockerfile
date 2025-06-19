FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 设置国内镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制依赖文件（先单独复制以利用缓存）
COPY package*.json ./

# 安装依赖
RUN npm install --production

# 复制应用代码
COPY server.js .

# 确保监听5002端口
EXPOSE 5002
CMD ["node", "server.js"]