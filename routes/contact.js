var express = require('express');
var router = express.Router();

/* GET contact. */
router.get('/', function(req, res, next) {
  res.render('contact', {
      title: 'Contact',
      description: 'leave us a message we will reply to you soon'
  });
});

module.exports = router;
