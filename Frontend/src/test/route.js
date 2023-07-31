const express = require('express');
const router = express.Router();
const connection = require('./api');

router.get('/titles', (req, res) => {
  const query = `SELECT title FROM your_table;`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).send('Error executing the query');
      return;
    }

    const titles = results.map((result) => result.title);
    res.json(titles);
  });
});

module.exports = router;