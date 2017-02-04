var express = require('express');
var router = express.Router();

/* GET about. */
router.get('/', function(req, res, next) {
  res.render('main', {
      title: 'about',
      subtitle: 'About my blog',
      description: 'I am learning Node and the Express framework now'
  });
});

module.exports = router;
