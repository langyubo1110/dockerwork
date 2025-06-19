// server.js
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 5002 });

let users = {}; // 存储所有连接的用户
let userNames = {}; // 存储用户的名字

server.on('connection', (ws) => {
  let currentUser = null;

  // 监听客户端发送的消息
  ws.on('message', (message) => {
    const data = JSON.parse(message);

    // 如果用户是第一次连接，要求输入名字
    if (data.type === 'set-name') {
      currentUser = data.name;
      userNames[ws] = currentUser;
      users[currentUser] = ws;

      // 向所有用户发送在线列表
      broadcastUserList();

      console.log(`${currentUser} 连接成功`);
    }

    // 处理聊天消息
    if (data.type === 'chat') {
      const { targetUser, text } = data;
      const targetWs = users[targetUser];
      if (targetWs) {
        targetWs.send(JSON.stringify({ type: 'chat', from: currentUser, text }));
      } else {
        ws.send(JSON.stringify({ type: 'error', text: `${targetUser} 不在线` }));
      }
    }
  });

  // 监听用户断开连接
  ws.on('close', () => {
    const userName = userNames[ws];
    if (userName) {
      delete users[userName];
      delete userNames[ws];
      broadcastUserList();
      console.log(`${userName} 已断开连接`);
    }
  });

  // 向所有连接的客户端广播在线用户列表
  function broadcastUserList() {
    const userList = Object.keys(users);
    Object.values(users).forEach((userWs) => {
      userWs.send(JSON.stringify({ type: 'user-list', users: userList }));
    });
  }
});

console.log('WebSocket 服务器已启动，端口：5002');
