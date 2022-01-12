const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/api');
const exphbs = require('express-handlebars');
// test for fileupload
const fileupload = require('express-fileupload');
const session = require('express-session');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
// test for file upload
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
app.use(routes);



// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT', PORT));
});
