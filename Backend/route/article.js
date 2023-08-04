const express = require('express');
const router = express.Router()
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

const getarctical = function(req, res) {
    const sql = 'SELECT * FROM `article`'; // 根据实际情况修改查询条件
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
}

// API接口：获取文章
router.get('/article', getarctical)

module.exports = router
