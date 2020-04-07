var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/api/login", function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.body);
  res.json({ msg: "fullstack working" });
});

module.exports = router;
