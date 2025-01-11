const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');
 
const app = express();
const PORT = 80; // HTTPS 通常使用 443 端口
 
// 设置 Express 应用来处理 POST 请求
app.use(express.json());
app.post('/webhook-endpoint', (req, res) => {
  const update = req.body;
  console.log('Received update:', update);
  res.sendStatus(200); // 向 Telegram 发送成功响应
});

app.get('/', (req, res) => {
    console.log('Received update:');
    res.sendStatus(200);
  });
 
// 读取 SSL 证书和密钥
const options = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem'))
};
 
// 创建 HTTPS 服务器
https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS server is running on port ${PORT}`);
});
