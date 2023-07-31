const express = require('express');
const app = express();
const mysql = require('mysql');

// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql1499', // 改成你自己的密码
    database: 'xinyu' // 改成你的数据库名称
});

// 连接到数据库
connection.connect();

// 解决跨域请求问题
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// API接口：获取用户订单信息
app.get('/user', function(req, res) {
    const sql = 'SELECT * FROM `order` WHERE id = 2'; // 根据实际情况修改查询条件
    connection.query(sql, [req.query.userId], function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
});

// API接口：获取墙信息
app.post('/walls', function(req, res) {
    const sql = 'SELECT * FROM walls'; // 根据实际情况修改查询条件
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
});

// 启动服务器，监听3000端口
app.listen(3000, function() {
  console.log(`服务器已启动，监听3000端口`);
});
