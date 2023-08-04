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

const getorder = function(req, res) {
    const sql = 'SELECT * FROM `order`WHERE order_id = 1'; // 根据实际情况修改查询条件
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
}
const getorder2 = function(req, res) {
    const sql = 'SELECT * FROM `order`WHERE order_id = 2'; // 根据实际情况修改查询条件
    connection.query(sql,  function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
}
const getorder3 = function(req, res) {
    const sql = 'SELECT * FROM `order`WHERE order_id = 3'; // 根据实际情况修改查询条件
    connection.query(sql,  function(err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        res.json(result);
    });
}
// API接口：获取文章
router.get('/order', getorder)
router.get('/order2', getorder2)
router.get('/order3', getorder3)

module.exports = router
