var express = require('express');
var serial = require('./sirial');
var router = express.Router();

var score = [0, 0, 0, 0];

var top = 0;

console.log('ランキングサーバー起動');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/1/:score', function (req, res, next) {
  var param = {"1":req.params.score};      // レスポンスで返す値。JSON形式。
  score[0] = req.params.score;
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);
  rank();
});
router.get('/2/:score', function (req, res, next) {
  var param = {"2":req.params.score};      // レスポンスで返す値。JSON形式。
  score[1] = req.params.score;
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);
  rank();
});
router.get('/3/:score', function (req, res, next) {
  var param = {"3":req.params.score};      // レスポンスで返す値。JSON形式。
  score[2] = req.params.score;
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);
  rank();
});
router.get('/4/:score', function (req, res, next) {
  var param = {"4":req.params.score};      // レスポンスで返す値。JSON形式。
  score[3] = req.params.score;
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);
  rank();
});
router.get('/score/', function (req, res, next) {
  var param = {"1":score[0], "2":score[1], "3":score[2], "4":score[3]};      // レスポンスで返す値。JSON形式。
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
  res.send(param);
});
router.get('/reset/', function (req, res, next) {
  score[0] = 0;
  score[1] = 0;
  score[2] = 0;
  score[3] = 0;
  res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
  res.send("reset");
  rank();
});

module.exports = router;

function rank(){
  top = Math.max.apply(null, score);
  var topCount = 0;
  for(var i=0,l=score.length;i<l;i++){
    if(score[i] == top){
      console.log(String(i + 1));
      serial.setData(String(i + 1));
      topCount++;
    }
    if(topCount > 1){
      serial.setData(String(0));
    }
  }
}
