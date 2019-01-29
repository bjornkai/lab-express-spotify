const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const app = express();
const SpotifyWebApi = require('spotify-web-api-node');

app.set('view engine', 'hbs');
app.set('views', __dirname + )

require('dotenv').config();

// Remember to paste your credentials here
var clientId = process.env.clientId,
    clientSecret = process.env.clientSecret;
    access_token = '';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(data => {
    console.log("data is: ", data)
  })
    spotifyApi.setAccessToken(data.body['access_token']);
  .catch( err => {
    console.log('Something went wrong when retrieving an access token', err);
  }) 
    
// routes go here

app.get('/', (res, req, next) => {
  res.render('home');
})

app.get('/artist', req, res, next => {
  // console.log("req ======= ", req.query);
  spotifyApi.searchArtists()
  .then(function(data) {
    console.log('Search artists by "Love"', data.body);
  })
  .catch(err => console.log("Error while getting the artists: ". err)};



app.listen(3000);