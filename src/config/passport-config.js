// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const User = require("../db/models").User;
// const authHelper = require("../auth/helpers");

// module.exports = {
//   init(app){
//     app.use(passport.initialize());
//     app.use(passport.session());

//     passport.use(new LocalStrategy({
//       usernameField: "username"
//     }, (username, password, done) => {
//       User.findOne({
//         where: { username }
//       })
//       .then((user) => {
//                 if (!user || !authHelper.comparePass(password, user.password)) {
//                   done(null, false, { message: "Invalid username or password" });
//                 }
//                   done(null, user);
//               })
//             }));
//     passport.serializeUser((user, callback) => {
//       callback(null, user.id);
//     });
//     passport.deserializeUser((id, callback) => {
//       User.findById(id)
//       .then((user) => {
//         callback(null, user);
//       })
//       .catch((err =>{
//         callback(err, user);
//       }))
//     });
//   }
// }

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
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