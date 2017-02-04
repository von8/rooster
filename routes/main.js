var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', {
      title: 'Express',
      description: 'This is my first Express app, so go easy on me'
  });
});

module.exports = router;
