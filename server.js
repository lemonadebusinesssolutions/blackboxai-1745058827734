require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { sequelize } = require('./config/database');
require('./config/passport'); // Passport config

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sessionStore = new SequelizeStore({
  db: sequelize,
});

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'wellnessprosecret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

sessionStore.sync();

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Wellness Pro API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
