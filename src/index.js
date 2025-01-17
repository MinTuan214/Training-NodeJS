const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

db.connect();

app.use(morgan('combined'));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
