module.exports = {
    results(req, res, next) {
    let text = "Welcome to the Results page";
      res.render("results", {text:text});
    }
  }