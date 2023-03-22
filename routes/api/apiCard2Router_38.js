var express = require('express');
var router = express.Router();

const db = require('../../utils/database');

/* Get HomePage. */
router.get('/', async function(req, res, next){
    try{
        const results = await db.query(`select * from card_38`)
        res.json(results.rows) 
    }catch(error){
        console.log('error');
    }
});

module.exports = router;