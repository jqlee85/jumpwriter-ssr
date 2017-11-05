var express = require('express');
var app = express();
var favicon = require('serve-favicon');

// Favicon
app.use(favicon(__dirname +'./../client/public/favicon.ico'));

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(3001); //listens on port 3001 -> http://localhost:3001/

// Console Notification
var date = new Date();
console.log('JumpWriter running at ' + date);
