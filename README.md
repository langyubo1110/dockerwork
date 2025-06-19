# 聊天应用部署指南

## 系统要求
- Docker 20.10+
- Docker Compose 1.29+

## 快速部署

![04a5a867157db3bcafb2f5753645303](https://raw.githubusercontent.com/langyubo1110/dockerwork/master/README.assets/04a5a867157db3bcafb2f5753645303.png)

```bash
# 创建docker-compose.yml
cat > docker-compose.yml <<EOF
version: '3.8'
services:
  frontend:
    image: your-username/chat-frontend:latest
    ports: ["5001:5001"]
    
  backend:
    image: your-username/chat-backend:latest
    ports: ["5002:3000"]
EOF

# 启动服务
docker-compose up -d
```

## 访问应用
- 前端：http://localhost:5001
- 后端：http://localhost:5002 (测试用)

## 前端使用说明
1. 输入用户名进入系统![c47363831af704dc925318b3653618c](https://raw.githubusercontent.com/langyubo1110/dockerwork/master/README.assets/c47363831af704dc925318b3653618c.png)
   
   选择在线用户开始聊天
   
   ![8cf1c7dc47100d06b9bce38e3304bb5](https://raw.githubusercontent.com/langyubo1110/dockerwork/master/README.assets/8cf1c7dc47100d06b9bce38e3304bb5.png)
   
2. 发送和接收消息

3. ![8f394711ea7df177494129ed5493196](https://raw.githubusercontent.com/langyubo1110/dockerwork/master/README.assets/8f394711ea7df177494129ed5493196.png)

   三个用户发送信息:![675dae077ef9dcf54fa11e53cd9261f](https://raw.githubusercontent.com/langyubo1110/dockerwork/master/README.assets/675dae077ef9dcf54fa11e53cd9261f.png)


## 开发模式

## 镜像源上传阿里云仓库

![image-20250618223215992](https://raw.githubusercontent.com/langyubo1110/dockerwork/master/README.assets/image-20250618223215992.png)

```
前端镜像源
docker pull crpi-bk5wuz61nntw3tai.cn-hangzhou.personal.cr.aliyuncs.com/langyubo/chat-app:v1
```

```
后端镜像源
docker pull crpi-bk5wuz61nntw3tai.cn-hangzhou.personal.cr.aliyuncs.com/langyubo/chat-app-backend:v1
```

```
# 下载docker-compose.yml
curl -O https://example.com/docker-compose.yml

# 启动服务
docker-compose up -d
```

### 前端开发

```bash
cd frontend
npm install
npm run serve
```

### 后端开发
```bash
cd backend
npm install
node server.js
```