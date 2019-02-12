const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models").User;
const authHelper = require("../auth/helpers");

module.exports = {
  init(app){
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy({
      passReqToCallBack: true,
      usernameField: "username", 
      emailField: "email"
    }, (req, username, password, done) => {
      User.findOne({
        where: { username, email }
      })
      .then((user, done) => {
        console.log(user)
                if (!user || !authHelper.comparePass(password, user.password)) {
                  done(null, false, { message: "Invalid email, username, or password" });
                }
                  done(null, user);
              })
            }));
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
  }
}