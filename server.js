const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/api');
// const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
 // const imgRoutes = require("./controllers/image-routes");

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

  const app = express();
  const PORT = process.env.PORT || 3001;
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//changed to false 1/9
app.use(express.static(path.join(__dirname, 'public')));
// app.engine('handlebars', exphbs.engine);
// app.set('view engine', 'handlebars');
app.use(session(sess));
// app.use(imgRoutes);

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT', PORT));
});