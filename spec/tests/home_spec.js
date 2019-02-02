const request = require("request");
const server = require("../../src/server.js");
const homePage = "http://localhost:3000/";

describe("routes : home", () => {
    it("should return a status code 200 and have 'Welcome to the Homepage' in the body of the response", (done) => {
        request.get(homePage, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
        })
    })
});