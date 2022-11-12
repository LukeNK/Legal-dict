var express = require('express');
var router = express.Router();
let fs = require('fs');

const dict = require('../public/dict.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Legal dictionary', dict: JSON.parse(fs.readFileSync('./public/dict.json', 'utf-8')) });
});

module.exports = router;
