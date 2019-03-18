var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const indexData = require('./routes/index');
const usersData = require('./routes/users');

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use(indexData.routes);
app.use(usersData.routes);

app.listen(3000);