const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');

// Leahs test
const exphbs = require('express-handlebars');
const fileUpload = require('express-fileupload');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// default use of express-fileupload
app.use(fileUpload());

const hbs = exphbs.create({});
//Leahs test Handlebars view engines
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});