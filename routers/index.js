const express = require('express');

const router = express.Router();// es como un middlerware

// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets,showForm:true } );
});
router.get('/user/:name', function (req, res) {
  let tweets = tweetBank.find({name:req.params.name});
  res.render( 'index', { tweets: tweets,showForm:true,nombre:req.params.name } );
});
router.get('/id/:id', function (req, res) {
  let tweets = tweetBank.find({id:parseInt(req.params.id)});
  res.render( 'index', { tweets: tweets } );
});
router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});
module.exports = router;
