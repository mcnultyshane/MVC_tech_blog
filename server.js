const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session')


const routes = require('./controllers');
const sequelize = require('./config/connection');
// sequelize store

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: '',
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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
