var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var routes = require('./routes/index');

app.use('/', routes);
// app.use(express.static(__dirname +'./../../')); //serves the index.html

// Favicon
app.use(favicon(__dirname +'./../client/public/favicon.ico'));

// Set Port
const PORT = process.env.PORT || 3001;

app.listen(PORT); //listens on port 3001 -> http://localhost:3001/

// Console Notification
var date = new Date();
console.log('JumpWriter running at ' + date);
