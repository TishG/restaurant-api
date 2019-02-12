const request = require("request");
const server = require("../../src/server");
const homePage = "http://localhost:3000/home";

describe("routes : home", () => {
    it("should return a status code 200", (done) => {
        request.get(homePage, (err, res, body) => {
            expect(res.statusCode).toBe(200);
            done();
        })
    })
});