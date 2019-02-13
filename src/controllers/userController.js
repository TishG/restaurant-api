const userQueries = require("../db/queries.users.js");
const passport = require("passport");

module.exports = {
    signUp(req, res, next){
      res.render("users/sign_up");
    },
    create(req, res, next){
           let newUser = {
             username: req.body.username,
             email: req.body.email,
             password: req.body.password,
             passwordConfirmation: req.body.passwordConfirmation
           };
           userQueries.createUser(newUser, (err, user) => {
             if(err){
               req.flash("error", err);
               res.redirect("/users/sign_up");
             } else {
               passport.authenticate("local")(req, res, () => {
                 req.flash("notice", "You've successfully signed in!");
                 res.redirect("/home");
               })
             }
           });
         },
         signInForm(req, res, next){
          res.render("users/sign_in");
        },
        signIn(req, res, next){
          passport.authenticate('local', function(user, info) {
console.log('-----------------', user, info)
            // if (err) { return next(err); }
            if (!user) { return res.redirect('/users/sign_up'); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.redirect('/home');
            });
          })(req, res, next);
          // passport.authenticate("local")(req, res, function () {
            // passport.authenticate("local")(req, res, () => {
            // if(!req.user){
            //   req.flash("notice", "Sign in failed. Please try again.")
            //   res.redirect("/users/sign_in");
          //   } else {
          //     req.flash("notice", "You've successfully signed in!");
          //     res.redirect("/home");
          //   }
          // })
        },
        signOut(req, res, next){
          req.logout();
          req.flash("notice", "You've successfully signed out!");
          res.redirect("/");
        }
  }
