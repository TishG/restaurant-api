const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../db/models").User;
const clientId = process.env.Client_ID;
const clientSecret = process.env.Client_Secret;
const facebookId = process.env.FACEBOOK_APP_ID 
const facebookSecret = process.env.FACEBOOK_APP_SECRET

module.exports = {
  init(app){
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(
      function(username, password, done) {
        console.log('hello', username)
        return User.findOne({ where: { username: username } })
          .then((err, user) => {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
      }
    ));

    passport.serializeUser((user, callback) => {
      callback(null, user.id);
    });

    passport.deserializeUser((id, callback) => {
      User.findById(id)
      .then((user) => {
        callback(null, user);
      })
      .catch((err =>{
        callback(err, user);
      }))
    });

    passport.use(new GoogleStrategy({
      clientID: clientId,
      clientSecret: clientSecret,
      callbackURL: "/home"
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(User, profile);
         User.findOrCreate({ googleId: profile.id }, function (err, user) {
           return done(err, user);
         });
    }
  ));

    passport.use(new FacebookStrategy({
        clientID: facebookId,
        clientSecret: facebookSecret,
        callbackURL: "/home"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ facebookId: profile.id }, function(err, user) {
          if (err) { return done(err); }
          done(null, user);
        });
      }
      ));
  }
}
