// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

// second route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// third route:
app.get('/work', (request, response, next) => response.sendFile(__dirname + '/views/work.html'));

app.use((req, res) => { res.status(404).send("No he encontrado nadaaaaaaaaaaaaa  4040404040404040404"); });

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
