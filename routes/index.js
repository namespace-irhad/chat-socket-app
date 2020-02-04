var express = require('express');
var router = express.Router();

const messages = require('../models/comments');
/* GET home page. */
router.get('/', function(req, res) {
  messages.find({}).sort({'date': -1}).limit(50).exec()
      .then(rez => {
        res.render('index', { title: 'Chat Application Test', msg: rez });
  })
      .catch(err => {
    res.status(400).json(err);
  })

});


module.exports = router;
