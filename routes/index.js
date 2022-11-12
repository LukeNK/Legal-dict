var express = require('express');
var router = express.Router();

const dict = require('../public/dict.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Legal dictionary', dict: dict });
});

module.exports = router;
