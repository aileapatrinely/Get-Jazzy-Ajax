const express = require('express');

const app = express();
const PORT = 5000;

const artistListArray = require('./artist');

const songListArray = require('./song');

const albumListArray = require('./albums');

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
  res.send(artistListArray); //the  server is sending data to the client.js
});

// TODO - Add GET for songs
app.get('/song', (req, res) => {
  res.send(songListArray);
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
