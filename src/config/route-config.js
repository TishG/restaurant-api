module.exports = {
    init(app) {
        const homeRoutes = require("../routes/home");
        app.use(homeRoutes);
        const resultsRoutes = require("../routes/results");
        app.use(resultsRoutes);
        
    }
}