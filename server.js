// Server for MVC Tech Blog

// Dependencies:
// Path Module
const path = require('path');
// Express.js Server
const express = require('express');
// dotenv file for sensitive configuration information
require('dotenv').config();
// Express Handlebars template ending for the front end.
const exphbs = require('express-handlebars');
// Express Session to handle session cookies.
const session = require('express-session');
// Handlebar helpers
const helpers = require('./utils/helpers');
// All routes as defined in the controllers folder
const routes = require('./controllers');
// Sequelize connection to the database
const sequelize = require('./config/connection');
// Sequelize store to save teh session so teh user will remain logged in
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Initalize the server
const app = express();
// Define the port for the server.
const PORT = process.env.PORT || 3001;

// Initalize handlebars for the html templates
const hbs = exphbs.create({ helpers });

// Initalize sessions
const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
        // Session will automatically expire in 10 minutes
        expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};
// Tell the app to use Express for the session handling
app.use(session(sess));

// Set handlebars as the template engine for the server
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Have Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Give the server a path to the public directory for the static file
app.use(express.static(path.join(__dirname, 'public')));

// Give the server the path to the routes
app.use(routes);

// Turn on the connection to the db and then the server
// force: true to reset the database and clear all values, updating any new relationships
// force: false to maintain data - aka normal operation
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
