module.exports = {
    init(app) {
        const homeRoutes = require("../routes/home");
        app.use(homeRoutes);
        const landingRoutes = require("../routes/landing");
        app.use(landingRoutes);
        const resultsRoutes = require("../routes/results");
        app.use(resultsRoutes);
        const userRoutes = require("../routes/users");
        app.use(userRoutes);  
    }
}