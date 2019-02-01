module.exports = {
    home(req, res, next){
        let message = "Welcome to the homepage"
        let title = "capstone"
      res.render("static/home", {message:message, title:title });
    }
  }