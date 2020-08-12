const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'remotemysql.com',
  user: 'MIWOmbtZpP',
  password: 'UEVIjDbIt9',
  port: 3306,
  database: 'MIWOmbtZpP'
}, 'single'))


app.listen(app.get('port'), () => {
  console.log("server on port 3000");
})
