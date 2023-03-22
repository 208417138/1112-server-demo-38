var express = require("express");
var router = express.Router('');

const db = require("../utils/database");

/*Get HomePage*/
router.get("/", async function (req, res, next) {
  try {
    const results = await db.query(`select * from card_38`);
    //console.log("json data", JSON.stringify(results.rows));
    res.render("card2_38/index", {
      data: results.rows,
      name: "LICHUN LIN",
      id: 208417138,
    });
  } catch (error) {
    console.log("error");
  }
});

module.exports = router;
