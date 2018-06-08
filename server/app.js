require('localenv');

const express = require('express');
const path = require('path');
const session = require('express-session');

const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 7000;

// Client OAuth configuration
const clientId = process.env.GITTER_KEY;
const clientSecret = process.env.GITTER_SECRET;
const callbackURL = process.env.GITTER_REDIRECT_URI;

const gitter = require('./gitter');
const { handleSuccess, handleError } = require('./utils');

app.use('/static', express.static(path.join(__dirname, '../build/static')));

app.use(session({
  secret: 'dreamteam',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration
passport.use(new OAuth2Strategy({
    authorizationURL:   gitter.host + '/login/oauth/authorize',
    tokenURL:           gitter.host + '/login/oauth/token',
    clientID:           clientId,
    clientSecret:       clientSecret,
    callbackURL:        callbackURL,
    passReqToCallback:  true
  },
  function(req, accessToken, refreshToken, profile, done) {
    req.session.token = accessToken;

    gitter.fetchCurrentUser(accessToken)
      .then(user => done(null, user))
      .catch(err => done(err));
  }
));

passport.serializeUser(function(user, done) {
  done(null, JSON.stringify(user));
});

passport.deserializeUser(function (user, done) {
  done(null, JSON.parse(user));
});

// Auth API
app.get('/auth/login', passport.authenticate('oauth2'));

app.get('/auth/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/login');
});

app.get('/auth/callback', passport.authenticate('oauth2', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

// Gitter API
app.get('/api/user', function(req, res) {
  gitter.fetchCurrentUser(req.session.token)
    .then(handleSuccess(res))
    .catch(handleError(res));
});

app.get('/api/messages/:roomId', function(req, res) {
  gitter.fetchMessages(req.session.token, req.params.roomId)
    .then(handleSuccess(res))
    .catch(handleError(res));
});

app.get('/api/rooms', function (req, res) {
  gitter.fetchRooms(req.session.token)
    .then(handleSuccess(res))
    .catch(handleError(res));
});

app.get('/api/steam', function (req, res) {
  
});

// Serve static
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

// Start server
app.listen(3000, () => console.log('Example app listening on port 3000!'));