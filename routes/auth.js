
const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

router.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/logs');
  } else {
    res.render('home');
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  userModel.findByUsername(username, (err, user) => {
    if (user && user.password === password) {
      req.session.user = user;
      res.redirect('/logs');
    } else {
      res.redirect('/login');
    }
  });
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  userModel.create(username, password, (err) => {
    if (err) return res.redirect('/register');
    res.redirect('/login');
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
