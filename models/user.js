
const db = require('../config/db');

module.exports = {
  findByUsername: (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], callback);
  },
  create: (username, password, callback) => {
    db.run('INSERT INTO users (username, password, role) VALUES (?, ?, ?)', [username, password, 'guest'], callback);
  },
  getAll: (callback) => {
    db.all('SELECT * FROM users', callback);
  }
};
