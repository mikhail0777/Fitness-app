
const express = require('express');
const router = express.Router();
const logModel = require('../models/log');
const userModel = require('../models/user');

router.get('/', (req, res) => {
  if (!req.session.user) return res.redirect('/login');

  logModel.findByUserId(req.session.user.id, (err, logs) => {
    if (req.session.user.role === 'admin') {
      userModel.getAll((err, users) => {
        res.render('admin', { users });
      });
    } else {
      res.render('dashboard', { logs });
    }
  });
});

router.post('/add', (req, res) => {
  if (!req.session.user) return res.redirect('/login');

  const { exercise, duration, date } = req.body;
  logModel.create(req.session.user.id, exercise, duration, date, (err) => {
    res.redirect('/logs');
  });
});

module.exports = router;
