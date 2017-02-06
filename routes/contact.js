var express = require('express');
var router = express.Router();

/* GET contact. */
router.get('/', function(req, res, next) {
  res.render('contact', {
      title: 'Contact',
      description: 'leave us a message we will reply to you soon'
  });
});

// 检验必填项
function isFilled(field) {
    return field !== undefined && field !== '';
}

// 检验email地址
var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isValidEmail(email) {
    return emailRegex.test(email);
}

router.post('/', function(req, res, next) {
    var response = 'Form posted successfully',
        required = [ 'name', 'email', 'message' ],
        missing = [];

    //检查必填项
    missing = required.filter(function(prop) {
        return !isFilled(req.body[prop]);
    });

    if ( missing.length ) {
        response = 'Please fill out all required fields (' + missing.join(', ') + ')';
    }

    //检查email
    else if ( !isValidEmail( req.body.email ) ) {
        response = 'Please enter a valid email address';
    }

    res.send( response );
});

module.exports = router;
