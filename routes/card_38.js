var express = require('express');
var router = express.Router();

/* GET card_demo page. */
router.get('/', function(req, res, next) {
  res.render('card_38/index', { name: 'LICHUN LIN', id:'208417138' });
});

module.exports = router;
