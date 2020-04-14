// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
    let url = request.query.yta || 'https://www.google.com'
    const mode = request.query.m || 'normal'
    if (mode === 'b' && url !== 'https://www.google.com') {
        url = Buffer.from((url) + '='.repeat(4 - (url.length % 4) ), 'base64').toString()
    }
    response.redirect(decodeURIComponent(url))
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});

