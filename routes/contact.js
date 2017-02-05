var express = require('express');
var router = express.Router();

/* GET contact. */
router.get('/', function(req, res, next) {
  res.render('contact', {
      title: 'Contact',
      description: 'leave us a message we will reply to you soon'
  });
});

router.post('/', function(req, res, next) {
    console.log('Name: ' + req.body.name);
    console.log('Email: ' + req.body.email);
    console.log('Message: ' + req.body.messages);

    res.send('Form posted successfully');
});

module.exports = router;
