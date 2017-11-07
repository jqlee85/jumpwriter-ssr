var express = require('express');
const app = express();
var favicon = require('serve-favicon');
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/App/App';
import StaticRouter from 'react-router-dom/StaticRouter';


function handleRender(req, res) {
  // Renders our Hello component into an HTML string
  const html = ReactDOMServer.renderToString(<StaticRouter><App /></StaticRouter>);

  // Load contents of index.html
  fs.readFile('../index.html', 'utf8', function (err, data) {
    if (err) throw err;

    // Inserts the rendered React HTML into our main div
    const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);

    // Sends the response back to the client
    res.send(document);
  });
}

// Serve built files with static files middleware
app.use('/build', express.static(path.join(__dirname, 'build')));

//serves the index.html
// app.use(express.static(__dirname +'./../../'));

// Favicon
app.use(favicon(__dirname +'./../client/public/favicon.ico'));

// Serve requests with our handleRender function
app.get('*', handleRender);

// Set Port
const PORT = process.env.PORT || 3001;

app.listen(PORT); //listens on port 3001 -> http://localhost:3001/

// Console Notification
var date = new Date();
console.log('JumpWriter running at ' + date);
