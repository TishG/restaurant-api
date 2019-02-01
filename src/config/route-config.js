module.exports = {
    init(app) {
        const homeRoutes = require("../routes/home");
        app.use(homeRoutes);
    }
}