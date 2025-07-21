
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const db = require('./config/db');

const authRoutes = require('./routes/auth');
const logRoutes = require('./routes/log');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'fitness_secret',
  resave: false,
  saveUninitialized: false
}));

app.use('/', authRoutes);
app.use('/logs', logRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
