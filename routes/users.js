var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('/ranking/score/でランキングが見れるよ！！\n/ranking/1~4/数値/でスコアの設定ができるよ！！');
});

module.exports = router;
