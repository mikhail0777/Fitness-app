
const db = require('../config/db');

module.exports = {
  create: (userId, exercise, duration, date, callback) => {
    db.run('INSERT INTO logs (user_id, exercise, duration, date) VALUES (?, ?, ?, ?)', [userId, exercise, duration, date], callback);
  },
  findByUserId: (userId, callback) => {
    db.all('SELECT * FROM logs WHERE user_id = ?', [userId], callback);
  }
};
