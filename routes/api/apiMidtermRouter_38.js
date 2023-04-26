var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

router.get('/menu_38', async function (req, res, next) {
    try {
        let results = await db.query(`select * from menu_38`);
        console.log('All data: ', JSON.stringify(results.rows), '\n');
        res.json(results.rows);
      } catch (error) {
        console.log(error);
      }
});

router.get('/menu_38/:category', async function (req, res, next) {
    let category = req.params.category
    try {
        let results = await db.query(`select * from menu_38 where category = $1`, [
            category
        ]);
        res.json(results.rows)
        // console.log('$1 data:', JSON.stringify(results.rows))
      } catch (error) {
        console.log(error);
      }
});

module.exports = router;
